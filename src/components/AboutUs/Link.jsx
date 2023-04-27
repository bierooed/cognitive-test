import React from "react";
import translate from "../../helpers/languageSwitcher";

export default function Link({ translations, source, link }) {
  return (
    <a
      target="_blank"
      className="mt-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={link}
    >
      {translate("readMore", translations, {
        source,
      })}
    </a>
  );
}
