import Trix from "trix";
import * as R from "ramda";

import axios from "axios";

const PATTERNS = {
  youtube: [
    /^https:\/\/youtu.be\/(?<id>.*)/,
    /^https:\/\/([^.]+\.)?youtube\.com\/watch\?v=(?<id>.*)/,
  ],
  vimeo: [/^https:\/\/vimeo.com\/(?<id>.*)/],
};

export default class EmbedController {
  constructor(element) {
    this.editor = element.editor;
    this.inputFieldElement = element.toolbarElement.querySelector(
      "[data-trix-input][name='embed']"
    );
    this.buttonElement = element.toolbarElement.querySelector(
      "[data-behavior='embed_url']"
    );
    this.isValidating = false;

    this.reset();
    this.installEventHandlers();
  }

  installEventHandlers() {
    this.inputFieldElement.addEventListener("input", this.validate.bind(this));
    this.buttonElement.addEventListener("click", this.didInput.bind(this));
  }

  didInput() {
    this.setLoading();

    let value = this.inputFieldElement.value.trim();
    let matching = this.patternMatch(value);

    // When patterns are loaded, we can just fetch the embed code
    if (matching) {
      this.fetch(matching);

      // No embed code, just reset the form
    } else {
      this.showErrors();
    }
  }

  validate(event) {
    if (this.isValidating) {
      let value = event.target.value.trim();
      let matching = this.patternMatch(value);

      if (matching) {
        this.resetErrors();
      } else {
        this.showErrors();
      }
    }
  }

  patternMatch(url) {
    if (!url) return null;

    let regMatch;

    R.forEachObjIndexed((value, key) => {
      value.some(pattern => {
        const match = url.match(pattern);
        if (match) {
          regMatch = {
            site: key,
            id: match.groups.id,
          };
          return true;
        }
      });
    }, PATTERNS);

    return regMatch;
  }

  fetch(value) {
    axios
      .get(`/trix_embeds/${encodeURIComponent(value.id)}?site=${value.site}`)
      .then(response => {
        this.embed(response);
      })
      .catch(() => {
        this.showErrors();
      });
  }

  embed(embed) {
    if (embed == null) return;

    let attachment = new Trix.Attachment(embed);
    this.editor.insertAttachment(attachment);
    this.editor.selectionManager.unlock();
    this.reset();
  }

  setLoading() {
    this.isValidating = true;
    this.buttonElement.disabled = true;
    this.buttonElement.innerText = "Embedding...";
  }

  showErrors() {
    this.inputFieldElement.setAttribute("data-trix-validate", "");
    this.inputFieldElement.setCustomValidity("Link is not supported");
    this.resetButton();
  }

  resetErrors() {
    this.inputFieldElement.removeAttribute("data-trix-validate");
    this.inputFieldElement.setCustomValidity("");
  }

  resetButton() {
    this.buttonElement.innerText = "Embed";
    this.buttonElement.disabled = false;
  }

  reset() {
    this.isValidating = false;
    this.inputFieldElement.value = "";
    this.resetButton();
    this.resetErrors();
  }
}
