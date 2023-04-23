import React from "react";
import translate from "../../helpers/languageSwitcher";
import { useSelector } from "react-redux";

export default function Link({ translations, source, link }) {
  const currentLang = useSelector((state) => state.language.currentLang);
  return (
    <a
      target="_blank"
      className="mt-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={link}
    >
      {translate("readMore", translations, currentLang, {
        source,
      })}
    </a>
  );
}
