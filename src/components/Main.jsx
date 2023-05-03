import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import paths from "../paths";
import Auth from "./Auth/Auth";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path={paths.home} element={<AboutUs />} />
        <Route path={paths.auth} element={<Auth />} />
      </Routes>
      <AboutUs />
    </main>
  );
}
