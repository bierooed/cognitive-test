import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import RouterLink from "./RouterLink";
import { useLocation } from "react-router-dom";
import translate from "../../helpers/languageSwitcher";
import headerTexts from "./headerTexts";
import { useSelector } from "react-redux";
import paths from "../../paths";

export default function Header() {
  const { pathname } = useLocation();
  const currentLang = useSelector((state) => state.language.currentLang);
  return (
    <header className="mb-6 flex md:justify-around xs: justify-between items-center pt-4 text-end">
      <LanguageSwitcher />
      {pathname === "/auth" ? (
        <RouterLink
          text={translate("backHome", headerTexts, currentLang)}
          path={paths.home}
        />
      ) : (
        <RouterLink
          text={translate("jumpToTest", headerTexts, currentLang)}
          path={paths.auth}
        />
      )}
    </header>
  );
}
