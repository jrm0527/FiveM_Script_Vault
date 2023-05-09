import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDom.render(React.createElement(App), document.getElementById("root"));
