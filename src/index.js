import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Editor from "../lib";
import DOMPurify from "dompurify";

export const VARIABLES = [
  {
    category: "Ticket",
    fields: [
      { key: "ticket.id", value: "ID" },
      { key: "ticket.number", value: "Number" }
    ]
  },
  {
    category: "Organization",
    fields: [
      { key: "organization.id", value: "ID" },
      { key: "organization.name", value: "Name" },
      { key: "organization.slug", value: "Slug" },
      { key: "organization.subdomain", value: "Subdomain" }
    ]
  }
];

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
            handleChange={e => setContent(e.target.value)}
            value={content}
            editorHeight={200}
            name={"test"}
            placeholderVariables={VARIABLES}
          />
          <div className="mt-6">
            <h1 className="mb-2 text-base font-medium text-gray-800">
              Preview
            </h1>
            <div
              className="p-4 break-words bg-white rounded shadow trix-content"
              style={{ minHeight: 240 }}
            >
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
