import React from "react";
import ReactDOMClient from "react-dom/client";
import MainApp from "./MainApp";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </>
);
