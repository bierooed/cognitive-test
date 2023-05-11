import React from "react";
import translate from "../../../helpers/languageSwitcher";

export default function Input({ type, placeholderType, handleInput }) {
  return (
    <input
      onChange={(e) => handleInput(e.target.value, placeholderType || type)}
      type={type}
      className="block border border-grey-light w-full p-3 rounded mb-4"
      placeholder={translate(`${placeholderType || type}Placeholder`)}
    />
  );
}
