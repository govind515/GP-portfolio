import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
// Rendering the root component using Concurrent Mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
