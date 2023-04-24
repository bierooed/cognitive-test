import React from "react";
import paths from "../paths";
import { setLang } from "../slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cn from "classnames";

export default function Header() {
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
    <header className="mb-6 flex md:justify-around xs: justify-between items-center pt-4 text-end">
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
      <div>
        <Link
          to={paths.auth}
          className="xs: p-2 xs: text-xs text-white bg-[#1b1f27] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full md:text-sm md:p-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
        >
          <span className="xs: px-1.5 md:px-2">Jump to test</span>
          <svg
            aria-hidden="true"
            className="xs: w-3.5 xs: h-3.5 md:w-4 md:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
