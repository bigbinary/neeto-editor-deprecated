import Trix from "trix";
import "trix/dist/trix.css";

addHeadingAttributes();
addForegroundColorAttributes();
addBackgroundColorAttributes();
configureBlockedAttributes();

function addHeadingAttributes() {
  Array.from(["h1", "h2", "h3", "h4", "h5", "h6"]).forEach((tagName, i) => {
    Trix.config.blockAttributes[`heading${i + 1}`] = {
      tagName: tagName,
      terminal: true,
      breakOnReturn: true,
      group: false
    };
  });
}

function configureBlockedAttributes() {
  Trix.config.blockAttributes.section = {
    tagName: "section",
    terminal: true,
    breakOnReturn: true,
    group: false
  };
}

function addForegroundColorAttributes() {
  Array.from([
    "rgb(136, 118, 38)",
    "rgb(185, 94, 6)",
    "rgb(207, 0, 0)",
    "rgb(216, 28, 170)",
    "rgb(144, 19, 254)",
    "rgb(5, 98, 185)",
    "rgb(17, 138, 15)",
    "rgb(148, 82, 22)",
    "rgb(102, 102, 102)"
  ]).forEach((color, i) => {
    Trix.config.textAttributes[`fgColor${i + 1}`] = {
      style: { color: color },
      inheritable: true,
      parser: (e) => e.style.color == color
    };
  });
}

function addBackgroundColorAttributes() {
  Array.from([
    "rgb(250, 247, 133)",
    "rgb(255, 240, 219)",
    "rgb(255, 229, 229)",
    "rgb(255, 228, 247)",
    "rgb(242, 237, 255)",
    "rgb(225, 239, 252)",
    "rgb(228, 248, 226)",
    "rgb(238, 226, 215)",
    "rgb(242, 242, 242)"
  ]).forEach((color, i) => {
    Trix.config.textAttributes[`bgColor${i + 1}`] = {
      style: { backgroundColor: color },
      inheritable: true,
      parser: (e) => e.style.backgroundColor == color
    };
  });
}

export default Trix;
