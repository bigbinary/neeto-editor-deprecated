import React from "react";

import { Dropdown } from "@bigbinary/neetoui";

export default function Placeholder({ name, placeholderVariables }) {
  function insertOnCursorPosition(field, data) {
    let input = document.querySelector(`[name="${field}"]`);
    if (input == undefined) {
      return;
    }
    if (input.nodeName == "TRIX-EDITOR") {
      input.editor.insertString(" ");
      input.editor.insertHTML(data);
    } else if (input.nodeName == "INPUT") {
      console.log("here:");
      const cursorPosition = input.selectionStart;
      const inputValue = input.value;
      input.value =
        inputValue.substring(0, cursorPosition) +
        data +
        inputValue.substring(cursorPosition);
      setCursorPosition(input, cursorPosition + data.length);
    }
  }

  function setCursorPosition(input, position) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(position, position);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd("character", position);
      range.moveStart("character", position);
      range.select();
    }
  }

  function addVariableToField(field, variable) {
    insertOnCursorPosition(field, `{{${variable.key}}}`);
  }

  return (
    <Dropdown
      position="top-right"
      buttonStyle="icon"
      icon="ri-braces-line"
      closeOnSelect={true}
    >
      <div className="p-4" style={{ width: "380px" }}>
        {placeholderVariables.map((variableCategory, index) => (
          <div className="flex flex-col" key={`variable_${index}`}>
            <h5 className="mb-2 text-base font-semibold text-gray-700">
              {variableCategory.category}
            </h5>
            <span className="flex flex-row flex-wrap mb-4">
              {variableCategory.fields.map((variable, varIndex) => (
                <span
                  key={`variable_field_${varIndex}`}
                  className="mb-1 mr-1 cursor-pointer badge badge-info"
                  onClick={() => addVariableToField(name, variable)}
                >
                  {variable.value}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </Dropdown>
  );
}
