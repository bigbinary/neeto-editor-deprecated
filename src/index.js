import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Sidebar";

const App = () => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          Example
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
