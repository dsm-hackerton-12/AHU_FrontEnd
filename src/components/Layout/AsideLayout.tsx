import React from "react";
import Aside from "../Aside/Index";
import { Outlet } from "react-router-dom";

export default function AsideLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      <div style={{ flex: 1, background: "#fff" }}>
        <Outlet />
      </div>
    </div>
  );
} 