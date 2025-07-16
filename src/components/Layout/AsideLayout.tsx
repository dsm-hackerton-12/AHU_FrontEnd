import React from "react";
import Aside from "../Aside/Index";
import { Outlet } from "react-router-dom";

export default function AsideLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Aside />
      <div style={{ flex: 1, background: "#fff" }}>
        <Outlet />
      </div>
    </div>
  );
} 