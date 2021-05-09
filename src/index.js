import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Editor from "../lib";
import DOMPurify from "dompurify";

const App = () => {
  const [content, setContent] = useState("Welcome to neetoEditor");
  const previewContent = () => {
    return { __html: DOMPurify.sanitize(content) };
  };
  return (
    <div className="w-screen h-screen overflow-y-auto bg-gray-50">
      <Header />
      <div className="p-8">
        <div className="mx-auto max-w-7xl">
          <Editor
            name="editor"
            label="Rich Text Editor"
            error={false}
            handleChange={(e) => setContent(e.target.value)}
            value={content}
            autoResize={true}
            editorHeight={200}
            className="mb-6"
          />
          <div className="mt-6">
            <h1 className="mb-2 text-base font-medium text-gray-800">Preview</h1>
            <div className="p-4 bg-white rounded shadow trix-content" style={{ minHeight: 240 }}>
              <div
                dangerouslySetInnerHTML={previewContent()}
                className="text-base font-normal text-gray-700"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
