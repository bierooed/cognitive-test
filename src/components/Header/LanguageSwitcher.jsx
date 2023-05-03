import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../slices/languageSlice";
import cn from "classnames";
import languages from "../../languages.js";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.currentLang);

  const getClassname = (lang) => {
    return cn({
      "hover:text-gray-600": true,
      "text-black": currentLang === lang,
      "text-gray-400": currentLang !== lang,
    });
  };
  return (
    <div>
      {languages.map(({ id, lang }) => (
        <button
          key={id}
          className={getClassname(lang)}
          onClick={() => dispatch(setLang(lang))}
        >
          {lang}
          {id !== languages.length - 1 && <span className="px-1">/</span>}
        </button>
      ))}
    </div>
  );
}
