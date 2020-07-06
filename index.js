import tippy from "tippy.js";
import setupSvg from "./src/setupSvg";
import initTyping from "./src/initTyping";

import "normalize.css";
import "tippy.js/dist/tippy.css";
import "./src/styles.css";

tippy("[data-tippy-content]");

setupSvg();
initTyping();
