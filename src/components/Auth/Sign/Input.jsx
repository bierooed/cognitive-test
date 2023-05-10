import React from "react";
import translate from "../../../helpers/languageSwitcher";

export default function Input({ type, placeholderType }) {
  return (
    <input
      type={type}
      className="block border border-grey-light w-full p-3 rounded mb-4"
      placeholder={translate(`${placeholderType || type}Placeholder`)}
    />
  );
}
