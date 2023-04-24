import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../slices/languageSlice";
import cn from "classnames";

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
      <button
        className={getClassname("ru")}
        onClick={() => dispatch(setLang("ru"))}
      >
        ru
      </button>{" "}
      /{" "}
      <button
        className={getClassname("en")}
        onClick={() => dispatch(setLang("en"))}
      >
        en
      </button>
    </div>
  );
}
