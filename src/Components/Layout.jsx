import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Folder from "./Folder";

export default function Layout() {
  
  return (
    <div>
    <Header />

      <div>
        <Outlet search={search} />
      </div>

      <Folder />
    </div>
  );
}
