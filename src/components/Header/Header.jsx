import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import RouterLink from "./RouterLink";
import { useLocation } from "react-router-dom";
import translate from "../../helpers/languageSwitcher";
import paths from "../../paths";
import { useSelector } from "react-redux";

export default function Header() {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <header className="mb-6 flex md:justify-around xs: justify-between items-center pt-4 text-end">
      <LanguageSwitcher />
      {pathname === "/auth" ? (
        <RouterLink text={translate("backHome")} path={paths.home} />
      ) : isAuth ? (
        <RouterLink text={translate("jumpToTest")} path={paths.auth} />
      ) : (
        <RouterLink text={translate("auth")} path={paths.auth} />
      )}
    </header>
  );
}
