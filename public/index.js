import React from "react";
import { createRoot } from "react-dom/client";

import ApplicationRoot from "Source/ApplicationRoot";

import "./style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ApplicationRoot />);
