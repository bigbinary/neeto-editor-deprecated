import React, { Component } from "react";
import classnames from "classnames";

class EditorToolbar extends Component {
  state = {
    id: this.props.id || "editorToolbar",
  };

  render = () => (
    <trix-toolbar id={this.state.id} style={this.props.toolbarStyles}>
      <div
        className={classnames("trix-button-row", {
          "is-compressed": this.props.isCompressedToolbar,
        })}
      >
        <span
          className="trix-button-group trix-button-group--text-tools"
          data-trix-button-group="text-tools"
        >
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-bold"
            data-trix-attribute="bold"
            data-trix-key="b"
            title="Bold"
            tabIndex="-1"
          >
            Bold
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-italic"
            data-trix-attribute="italic"
            data-trix-key="i"
            title="Italic"
            tabIndex="-1"
          >
            Italic
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-strike"
            data-trix-attribute="strike"
            title="Strikethrough"
            tabIndex="-1"
          >
            Strikethrough
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-link"
            data-trix-attribute="href"
            data-trix-action="link"
            data-trix-key="k"
            title="Link"
            tabIndex="-1"
          >
            Link
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-embed"
            data-trix-attribute="embed"
            title="Embed"
            tabIndex="-1"
          >
            Embed
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-color"
            data-trix-attribute="x-color"
            title="Color"
            tabIndex="-1"
          >
            Color
          </button>
        </span>
        <span
          className="trix-button-group trix-button-group--block-tools"
          data-trix-button-group="block-tools"
        >
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-heading-1"
            data-trix-attribute="x-heading"
            title="Heading"
            tabIndex="-1"
          >
            Heading
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-quote"
            data-trix-attribute="quote"
            title="Blockquote"
            tabIndex="-1"
          >
            Blockquote
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-code"
            data-trix-attribute="code"
            title="Codeblock"
            tabIndex="-1"
          >
            Codeblock
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-bullet-list"
            data-trix-attribute="bullet"
            title="Bullets"
            tabIndex="-1"
          >
            Bullets
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-number-list"
            data-trix-attribute="number"
            title="Numbers"
            tabIndex="-1"
          >
            Numbers
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-decrease-nesting-level"
            data-trix-action="decreaseNestingLevel"
            title="Outdent"
            tabIndex="-1"
          >
            Outdent
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-increase-nesting-level"
            data-trix-action="increaseNestingLevel"
            title="Indent"
            tabIndex="-1"
          >
            Indent
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-note"
            data-trix-attribute="section"
            title="Note"
            tabIndex="-1"
          >
            Note
          </button>
        </span>
        <span
          className="trix-button-group trix-button-group--upload-tools ml-0"
          data-trix-button-group="upload-tools"
        >
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-image"
            title="Insert Image"
            tabIndex="-1"
            onClick={this.props.insertImage}
          >
            Insert Image
          </button>

          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-attach"
            title="Attach files"
            tabIndex="-1"
            onClick={() => this.props.attachmentRef.click()}
          >
            Attach files
          </button>
        </span>
        <span className="trix-button-group-spacer" />
        <span
          className="trix-button-group trix-button-group--history-tools"
          data-trix-button-group="history-tools"
        >
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-undo"
            data-trix-action="undo"
            data-trix-key="z"
            title="Undo"
            tabIndex="-1"
          >
            Undo
          </button>
          <button
            type="button"
            className="trix-button trix-button--icon trix-button--icon-redo"
            data-trix-action="redo"
            data-trix-key="shift+z"
            title="Redo"
            tabIndex="-1"
          >
            Redo
          </button>
        </span>
      </div>
      <div className="trix-dialogs" data-trix-dialogs>
        <div
          className="trix-dialog trix-dialog--link form-group"
          data-trix-dialog="href"
          data-trix-dialog-attribute="href"
        >
          <div className="d-flex container-fluid px-0 align-items-center trix-dialog__link-fields">
            <div className="d-flex flex-column flex-grow-1 mr-2 w-full">
              <input
                type="text"
                name="href"
                className="trix-input trix-input--dialog w-full form-control"
                placeholder="Enter URL"
                aria-label="${lang.url}"
                required
                data-trix-input
              />
            </div>
            <div className="d-flex">
              <input
                type="button"
                className="btn btn-outline--blue mr-2"
                value="Link"
                data-trix-method="setAttribute"
              />
              <input
                type="button"
                className="btn btn-outline--gray"
                value="Unlink"
                data-trix-method="removeAttribute"
              />
            </div>
          </div>
        </div>

        <div
          className="trix-dialog trix-dialog--link"
          data-trix-dialog="embed"
          data-trix-dialog-attribute="embed"
        >
          <div className="trix-dialog__link-fields form-group mb-0 flex-column">
            <div className="d-flex container-fluid px-0 align-items-center">
              <div className="d-flex flex-column flex-grow-1 mr-3">
                <input
                  type="url"
                  name="embed"
                  className="trix-input trix-input--dialog w-full form-control"
                  placeholder="Enter URL"
                  aria-label="URL"
                  data-trix-input
                />
              </div>
              <div className="trix-button-group">
                <button
                  className="btn btn-outline--blue"
                  data-trix-action="x-embed-url"
                  data-behavior="embed_url"
                >
                  Embed
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="trix-dialog trix-dialog--heading"
          data-trix-dialog="x-heading"
          data-trix-dialog-attribute="x-heading"
        >
          <div className="trix-dialog__link-fields">
            <div className="trix-button-group">
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading1"
              >
                H1
              </button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading2"
              >
                H2
              </button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading3"
              >
                H3
              </button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading4"
              >
                H4
              </button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading5"
              >
                H5
              </button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="heading6"
              >
                H6
              </button>
            </div>
          </div>
        </div>

        <div
          className="trix-dialog trix-dialog--color"
          data-trix-dialog="x-color"
          data-trix-dialog-attribute="x-color"
        >
          <div className="trix-dialog__link-fields">
            <div className="trix-button-group">
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor1"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor2"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor3"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor4"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor5"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor6"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor7"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor8"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="fgColor9"
                data-trix-method="hideDialog"
              ></button>
            </div>
            <div className="trix-button-group">
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor1"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor2"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor3"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor4"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor5"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor6"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor7"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor8"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button trix-button--dialog"
                data-trix-attribute="bgColor9"
                data-trix-method="hideDialog"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </trix-toolbar>
  );
}

export default EditorToolbar;
