import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import "./index.css";
import RatingStar from "./Components/RatingStar.jsx";
RatingStar;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RatingStar maxRating={8}/>
    <RatingStar maxRating={5}/>
    <RatingStar maxRating={3}/>
  </React.StrictMode>
);
