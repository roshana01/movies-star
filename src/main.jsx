import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import "./index.css";
import RatingStar from "./Components/RatingStar.jsx";
RatingStar;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RatingStar />
  </React.StrictMode>
);
