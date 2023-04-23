import React from "react";
import translate from "../../../helpers/languageSwitcher";
import { extraTexts } from "../aboutUsTexts";
import { useSelector } from "react-redux";

export default function MobileInfoBlock({
  illustration,
  translations,
  link,
  linkText,
  handleFunction,
}) {
  const currentLang = useSelector((state) => state.language.currentLang);
  return (
    <div className="xs:flex justify-start items-center flex-col w-auto md:hidden rounded-lg shadow-md mb-12">
      <div className="flex justify-center">
        <img className="w-96" src={illustration} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl tracking-tight">
          {translate("heading", translations, currentLang)}
        </h5>
        <p className="mb-3 font-thin">
          {translate("description", translations, currentLang)}
        </p>
        {!!handleFunction && (
          <button
            onClick={() => handleFunction(true, { text, link, linkText })}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-500 cursor-pointer"
          >
            {translate("mobileReadMoreButton", extraTexts, currentLang)}
          </button>
        )}
      </div>
    </div>
  );
}
