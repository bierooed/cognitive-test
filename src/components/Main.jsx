import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import paths from "../paths";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path={paths.home} element={<AboutUs />} />
        <Route path={paths.auth} element={<h1>Hello, world!</h1>} />
      </Routes>
    </main>
  );
}
