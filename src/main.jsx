import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import routes from "@/routes/mainRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <div data-theme="cupcake" className="min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
