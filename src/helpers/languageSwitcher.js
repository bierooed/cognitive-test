import { useSelector } from "react-redux";
import texts from "../texts";

function translate(message, variables = null) {
  const translations = texts;
  const locale = useSelector((state) => state.language.currentLang);
  const defaultLocale = !["en", "ru"].includes(locale) ? "en" : locale;

  let translation = translations[defaultLocale || locale][message];
  if (!translation) {
    console.error("No message for translation");
  }

  if (variables) {
    Object.keys(variables).forEach((variable) => {
      translation = translation.replace(`{${variable}}`, variables[variable]);
    });
  }

  return translation;
}

export default translate;
