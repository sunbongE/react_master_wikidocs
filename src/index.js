import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import App2 from "./APP2";
import RenderTest from "./RenderTest";
import AutoFocus from "./AutoFocus";
import UpdateObjUseImmer from "./UpdateObjUseImmer";
import UpdateObjUseState from "./UpdateObjUseState";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <hr/>
    <App2/>
    <hr/>
    <RenderTest />
    <hr/>
    <AutoFocus></AutoFocus>
    <hr />
    <h1>useState으로 객체 업데이트</h1>
    <UpdateObjUseState></UpdateObjUseState>
    <h1>useImmer으로 객체 업데이트</h1>
    <UpdateObjUseImmer></UpdateObjUseImmer>
  </StrictMode>
);