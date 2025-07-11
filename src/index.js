import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import App2 from "./APP2";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <br/>
    <App2/>
  </StrictMode>
);