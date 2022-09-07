import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import Home from "./router/Home";
import List from "./router/List";
import Today from "./router/Today";
import NotFound from "./router/NotFound";
import "./assets/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
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
  </Provider>
);
