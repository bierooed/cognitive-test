import { useSelector } from "react-redux";

function translate(message, translations, variables = null) {
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
