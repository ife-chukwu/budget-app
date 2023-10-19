import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyContextApi } from "./Components/MyContextApi.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContextApi>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyContextApi>
  </BrowserRouter>
);
