import React from "react";
import NeetoEditorLogo from "./neeto-editor.svg";

const Header = () => {
  return (
    <nav className="sticky top-0 left-0 py-5 bg-white shadow">
      <div className="mx-auto max-w-7xl">
        <img src={NeetoEditorLogo} className="w-auto h-6"/>
      </div>
    </nav>
  );
};

export default Header;
