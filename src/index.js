import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const Kimono = lazy(() => import("./Kimono.jsx"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products/kimono" element={<Kimono />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
