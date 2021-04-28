import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Editor from "../lib";
import Sidebar from "./Sidebar";
import DOMPurify from "dompurify";

const App = () => {
  const [content, setContent] = useState("Welcome to neetoEditor");
  const previewContent = () => {
    return { __html: DOMPurify.sanitize(content) };
  };
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <div className="relative flex flex-col flex-grow h-screen p-4 overflow-auto">
          <Editor
            name="editor"
            label="Rich Text Editor"
            labelProps={{
              className: "font-normal mb-2",
            }}
            error={false}
            handleChange={(e) => setContent(e.target.value)}
            value={content}
            autoResize={true}
            editorHeight={200}
            backgroundColor="bg-white"
          />
          <div className="mt-6">
            <h2 className="mb-2 text-sm font-medium">Preview</h2>
            <div
              dangerouslySetInnerHTML={previewContent()}
              className="border border-gray-200 rounded-md p-3 min-h-200 text-base"
            ></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
