import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidenavbar from "./Sidenavbar";

export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidenavbar />
      <div style={{ flexGrow: 1, background: "#f9f9f9" }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
