import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "@/stores/store";
import { Provider } from "react-redux";
// import routes from "@/routes/mainRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <div data-theme="cupcake" className="min-h-screen">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
