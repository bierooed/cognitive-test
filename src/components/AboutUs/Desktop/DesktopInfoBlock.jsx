import React from "react";
import { useSelector } from "react-redux";
import translate from "../../../helpers/languageSwitcher";

export default function DesktopInfoBlock({ illustration, translations }) {
  const currentLang = useSelector((state) => state.language.currentLang);

  return (
    <>
      <div className="mb-6">
        <img className="w-96" src={illustration} />
      </div>
      <h1 className="text-xl mb-6">
        {translate("heading", translations, currentLang)}
      </h1>
      <p className="w-4/6">
        {translate("fullText", translations, currentLang)}
      </p>
    </>
  );
}
