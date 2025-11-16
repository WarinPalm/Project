// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 1. ลบ App และ BrowserRouter ออก
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";

// 2. Import Router ที่เราจะสร้างขึ้นมาใหม่
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 3. เรียกใช้ <Router /> แค่ตัวนี้ตัวเดียว */}
    <Router />
  </React.StrictMode>
);