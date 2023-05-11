import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import paths from "../paths";

import Auth from "./Auth/Auth";
import translate from "../helpers/languageSwitcher";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path={paths.home} element={<AboutUs />} />
        <Route
          path={paths.signUp}
          element={
            <Auth
              type="signUp"
              heading={translate("signUpHeading")}
              authExtraText={translate("signUpExtraText")}
              authExtraPath="/signIn"
            />
          }
        />
        <Route
          path={paths.signIn}
          element={
            <Auth
              type="signIn"
              heading={translate("signInHeading")}
              authExtraText={translate("signInExtraText")}
              authExtraPath="/signUp"
            />
          }
        />
      </Routes>
    </main>
  );
}
