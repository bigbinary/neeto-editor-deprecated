import Trix from "trix";
import Tribute from "tributejs";

export default class MentionsController {
  constructor(element, fetchUsers) {
    this.element = element;
    this.fetchUsers = fetchUsers;
    this.editor = element.editor;
    this.initializeTribute();
  }

  initializeTribute() {
    this.tribute = new Tribute({
      allowSpaces: true,
      lookup: "name",
      fillAttr: "name",
      values: this.fetchUsers,
      menuShowMinLength: 1,
    });
    this.tribute.attach(this.element);
    this.tribute.range.pasteHtml = this._pasteHtml.bind(this);
    this.element.addEventListener("tribute-replaced", this.replaced);
  }

  replaced(e) {
    let mention = e.detail.item.original;
    let attachment = new Trix.Attachment({
      sgid: mention.sgid,
      content: mention.content,
    });

    this.editor.insertAttachment(attachment);
    this.editor.insertString(" ");
  }

  // _pasteHtml(html, startPos, endPos) {
  _pasteHtml() {
    let position = this.editor.getPosition();

    let keywordLength = this.tribute.currentMentionTextSnapshot.length + 1;
    this.editor.setSelectedRange([position - keywordLength, position]);
    this.editor.deleteInDirection("backward");
  }
}
