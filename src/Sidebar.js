import React from "react";
import { NavLink } from "react-router-dom";
import NeetoEditorLogo from "./neeto-editor.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
      <div className="flex items-center flex-shrink-0 px-4 space-y-5">
        <img src={NeetoEditorLogo} />
      </div>
      <div className="flex flex-col flex-grow mt-6">
        <div className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
          <NavLink
            to="/"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline"
            activeClassName="text-purple-500 border-l-4 border-indigo-600 bg-indigo-50"
          >
            Editor
          </NavLink>

          {/* <NavLink
            to="/inline"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline"
            activeClassName="text-purple-500 border-l-4 border-indigo-600 bg-indigo-50"
          >
            Inline Editor
          </NavLink>

          <NavLink
            to="/multiple"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline"
            activeClassName="text-purple-500 border-l-4 border-indigo-600 bg-indigo-50"
          >
            Multiple Editors
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
