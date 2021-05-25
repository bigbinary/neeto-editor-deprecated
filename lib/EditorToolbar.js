import React from "react";

const DialogButton = ({ style = "primary", ...otherProps }) => (
  <input type="button" className={`ne-btn ne-btn--${style}`} {...otherProps} />
);

const TrixButton = ({ icon, ...otherProps }) => (
  <button type="button" className="trix-button" tabIndex="-1" {...otherProps}>
    <i className={icon}></i>
  </button>
);

const EditorToolbar = ({
  id = "editorToolbar",
  insertImage,
  attachmentRef,
  toolbarStyles,
}) => {
  return (
    <trix-toolbar id={id} style={toolbarStyles}>
      <div className="ne-trix-button-row">
        <div
          className="ne-trix-button-group ne-trix-button-group--text-tools"
          data-trix-button-group="text-tools"
        >
          <TrixButton
            title="Bold"
            icon="ri-bold"
            data-trix-key="b"
            data-trix-attribute="bold"
          />
          <TrixButton
            title="Italic"
            icon="ri-italic"
            data-trix-key="i"
            data-trix-attribute="italic"
          />
          <TrixButton
            title="Strikethrough"
            icon="ri-strikethrough"
            data-trix-attribute="strike"
          />
          <TrixButton
            title="Link"
            icon="ri-link"
            data-trix-key="k"
            data-trix-action="link"
            data-trix-attribute="href"
          />
          <TrixButton
            title="Embed"
            icon="ri-video-add-line"
            data-trix-attribute="embed"
          />
          <TrixButton
            title="Font Color"
            icon="ri-font-color"
            data-trix-attribute="x-color"
          />
        </div>
        <div
          className="ne-trix-button-group ne-trix-button-group--block-tools"
          data-trix-button-group="block-tools"
        >
          <TrixButton
            title="Heading"
            icon="ri-font-size-2"
            data-trix-attribute="x-heading"
          />
          <TrixButton
            title="Blockquote"
            icon="ri-double-quotes-r"
            data-trix-attribute="quote"
          />
          <TrixButton
            title="Codeblock"
            icon="ri-code-line"
            data-trix-attribute="code"
          />
          <TrixButton
            title="Unordered List"
            icon="ri-list-unordered"
            data-trix-attribute="bullet"
          />
          <TrixButton
            title="Ordered List"
            icon="ri-list-ordered"
            data-trix-attribute="number"
          />
          <TrixButton
            title="Outdent"
            icon="ri-indent-decrease"
            data-trix-attribute="decreaseNestingLevel"
          />
          <TrixButton
            title="Indent"
            icon="ri-indent-increase"
            data-trix-attribute="increaseNestingLevel"
          />
          <TrixButton
            title="Note"
            icon="ri-sticky-note-line"
            data-trix-attribute="section"
          />
        </div>
        <div
          className="ml-0 ne-trix-button-group ne-trix-button-group--upload-tools"
          data-trix-button-group="upload-tools"
        >
          <TrixButton
            title="Add Image"
            icon="ri-image-add-line"
            onClick={insertImage}
          />
          {attachmentRef && (
            <TrixButton
              title="Attach Files"
              icon="ri-attachment-2"
              onClick={() => attachmentRef.click()}
            />
          )}
        </div>
        <div
          className="ne-trix-button-group ne-trix-button-group--history-tools"
          data-trix-button-group="history-tools"
        >
          <TrixButton
            title="Undo"
            data-trix-key="z"
            data-trix-action="undo"
            icon="ri-arrow-go-back-line"
          />
          <TrixButton
            title="Redo"
            data-trix-key="shift+z"
            data-trix-action="redo"
            icon="ri-arrow-go-forward-line"
          />
        </div>
      </div>
      <div className="trix-dialogs" data-trix-dialogs>
        <div
          className="trix-dialog trix-dialog--link"
          data-trix-dialog="href"
          data-trix-dialog-attribute="href"
        >
          <div className="flex flex-row items-center justify-start">
            <input
              type="text"
              name="href"
              className="trix-input"
              placeholder="Enter URL"
              aria-label="${lang.url}"
              required
              data-trix-input
            />
            <div className="flex flex-row items-center justify-end ml-4 space-x-2">
              <DialogButton value="Link" data-trix-method="setAttribute" />
              <DialogButton
                style="secondary"
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
          <div className="flex flex-row items-center justify-start">
            <input
              type="url"
              name="embed"
              className="trix-input"
              placeholder="Enter URL"
              aria-label="URL"
              data-trix-input
            />
            <div className="flex flex-row items-center justify-end ml-4">
              <DialogButton
                value="Embed"
                data-trix-action="x-embed-url"
                data-behavior="embed_url"
              />
            </div>
          </div>
        </div>

        <div
          className="trix-dialog trix-dialog--heading"
          data-trix-dialog="x-heading"
          data-trix-dialog-attribute="x-heading"
        >
          <div className="ne-trix-button-row">
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading1"
            >
              H1
            </button>
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading2"
            >
              H2
            </button>
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading3"
            >
              H3
            </button>
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading4"
            >
              H4
            </button>
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading5"
            >
              H5
            </button>
            <button
              type="button"
              className="trix-button"
              data-trix-attribute="heading6"
            >
              H6
            </button>
          </div>
        </div>

        <div
          className="trix-dialog trix-dialog--color"
          data-trix-dialog="x-color"
          data-trix-dialog-attribute="x-color"
        >
          <div className="flex flex-col items-start justify-center">
            <div className="ne-trix-button-group">
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor1"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor2"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor3"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor4"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor5"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor6"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor7"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor8"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="fgColor9"
                data-trix-method="hideDialog"
              ></button>
            </div>
            <div className="ne-trix-button-group">
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor1"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor2"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor3"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor4"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor5"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor6"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor7"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor8"
                data-trix-method="hideDialog"
              ></button>
              <button
                type="button"
                className="trix-button"
                data-trix-attribute="bgColor9"
                data-trix-method="hideDialog"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </trix-toolbar>
  );
};

export default EditorToolbar;
