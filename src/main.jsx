import React from "react";
import ReactDOM from "react-dom/client";
// Імпорт стилів нормалізації
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";

const rootElement = document.getElementById("root")
const reactRoot = ReactDOM.createRoot(rootElement)

 reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
