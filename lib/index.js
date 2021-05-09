import React, { Component } from "react";
import * as R from "ramda";
import EditorToolbar from "./EditorToolbar";
import { AttachmentUpload } from "./attachment_upload";
import EmbedController from "./EmbedController";
import MentionsController from "./MentionsController";
import "./ConfiguredTrix";
import "./styles/index.scss";

import { DIRECT_UPLOAD_BLOB_TEMPLATE_URL, DIRECT_UPLOAD_API_URL } from "./urls";

const isNotPresent = R.either(R.isNil, R.isEmpty);
export default class RichTextEditor extends Component {
  state = {
    editorHeight: 400,
    isSticky: false
  };

  componentDidUpdate(prevProps) {
    const editor = document.querySelector("trix-editor");

    if (editor && this.props.error && this.props.error != prevProps.error) {
      editor.classList.add(
        "text-red-800",
        "focus-within:shadow-focus-red",
        "focus:border-red-400",
        "border-red-400"
      );
    }
  }

  componentDidMount() {
    const {
      handleChange,
      handleFocus,
      focusEditor,
      editorHeight,
      fixToolbar
    } = this.props;

    if (focusEditor) this.editor.focus();

    if (fixToolbar) window.addEventListener("scroll", this.handleScroll, true);

    this.editor.addEventListener("trix-change", handleChange);
    this.editor.addEventListener("trix-focus", handleFocus);
    this.editor.addEventListener("trix-attachment-add", this.uploadImage);
    this.editor.addEventListener("trix-initialize", this.handleTrixInit);

    this.setState({
      editorHeight: editorHeight
        ? editorHeight
        : this.getProposedEditorHeight() || this.state.editorHeight
    });
  }

  componentWillUnmount() {
    const { handleChange, handleFocus } = this.props;

    this.editor.removeEventListener("trix-change", handleChange);
    this.editor.removeEventListener("trix-focus", handleFocus);
    this.editor.removeEventListener("trix-attachment-add", this.uploadImage);
    if (this.props.fixToolbar)
      window.removeEventListener("scroll", this.handleScroll);
  }

  renderFormInputError = () => {
    if (!this.props.error) return null;

    let message;

    if (R.is(String, this.props.error)) {
      message = this.props.error;
    } else if (R.is(Array, this.props.error)) {
      message = this.props.error[0];
    } else if (R.is(Object, this.props.error)) {
      message = this.props.error.message;
    }

    if (isNotPresent(message)) return null;

    return <p className="nui-input__error">{message}</p>;
  };

  handleTrixInit = (event) => {
    new EmbedController(event.target);

    const { allowMentions, fetchUsers } = this.props;
    if (allowMentions) new MentionsController(event.target, fetchUsers);

    var length = this.editor.editor.getDocument().toString().length;
    this.props.value ? this.editor.editor.setSelectedRange(length - 1) : null;
  };

  handleScroll = () => {
    if (this.props.fixToolbar && this.trix) {
      const { top, bottom } = this.trix.getBoundingClientRect();
      const toolBarHeight = this.trix.firstElementChild.offsetHeight;
      const fixOffsetTop = this.props.fixOffsetTop || 0;

      if (
        !this.state.isSticky &&
        top < fixOffsetTop &&
        bottom > toolBarHeight
      ) {
        this.setState({ isSticky: true });
      } else if (
        this.state.isSticky &&
        (top > fixOffsetTop || bottom < toolBarHeight)
      ) {
        this.setState({ isSticky: false });
      }
    }
  };

  insertImage = () => {
    const editorNode = this.editor;
    const fileInput = document.createElement("input");

    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("accept", "image/*");

    fileInput.addEventListener("change", function () {
      const files = Array.from(this.files);

      return files.map((file) => editorNode.editor.insertFile(file));
    });

    fileInput.click();
  };

  uploadImage = (event) => {
    const { attachment, target } = event;

    if (attachment.file) {
      const upload = new AttachmentUpload(attachment, target);
      upload.start();
    }
  };

  getProposedEditorHeight = () => {
    const editor = document.querySelector("trix-editor");

    if (editor) {
      const topOffset = editor.getBoundingClientRect().top;
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      const bottomMargin = 10;

      return viewportHeight - topOffset - bottomMargin;
    }
  };

  render() {
    const { editorHeight, isSticky } = this.state;
    const {
      id = "0",
      name,
      label = "",
      value,
      helpText = "",
      ...otherProps
    } = this.props;
    let editorStyles = { minHeight: editorHeight };
    let toolbarStyles = {};

    if (isSticky) {
      toolbarStyles = {
        position: "fixed",
        zIndex: 1,
        top: this.props.fixOffsetTop || 0,
        left: this.trix.getBoundingClientRect().x + 1,
        width: this.trix.offsetWidth - 2,
        borderTop: "1px solid #e2e3e4",
        borderBottom: "1px solid #e2e3e4",
        boxShadow: "0 0 5px rgb(17 17 17 / 20%)",
        borderRadius: "0 0 5px 5px"
      };
    }

    return (
      <React.Fragment>
        {label && (
          <label className="mb-1 nui-label">
            {label}
          </label>
        )}
        <div className="nui-trix__wrapper" ref={(element) => (this.trix = element)}>
          <EditorToolbar
            id={`editorToolbar_${id}`}
            toolbarStyles={toolbarStyles}
            insertImage={this.insertImage}
            attachmentRef={this.props.attachmentRef}
          />
          <input
            id={`editor_${id}`}
            value={value}
            type="hidden"
            name="content"
          />
          <trix-editor
            name={name}
            id={`trixEditor_${id}`}
            input={`editor_${id}`}
            style={editorStyles}
            toolbar={`editorToolbar_${id}`}
            data-direct-upload-url={DIRECT_UPLOAD_API_URL}
            data-blob-url-template={DIRECT_UPLOAD_BLOB_TEMPLATE_URL}
            ref={(element) => (this.editor = element)}
            {...otherProps}
          />
          {helpText && <p className="nui-input__help-text">{helpText}</p>}
        </div>
        {this.renderFormInputError()}
      </React.Fragment>
    );
  }
}
