import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import List from "./router/List";
import Today from "./router/Today";
import NotFound from "./router/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="today" element={<Today />} />
        <Route path="todo-list/:id" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
