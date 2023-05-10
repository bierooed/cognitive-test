import React, { useEffect } from "react";
import Link from "../Link";

export default function MobilePopupInfo({
  handleFunction,
  text,
  linkText,
  link,
}) {
  const header = document.getElementsByTagName("header")[0];
  useEffect(() => {
    header.style.visibility = "hidden";
  });
  return (
    <div className="my-8">
      <div className="text-right mb-4">
        <button
          onClick={() => {
            handleFunction(false);
            header.style.visibility = "visible";
          }}
          className="text-2xl"
        >
          ×
        </button>
      </div>
      <p className="mb-6">{text}</p>
      {!!link && (
        <a
          href={link}
          target="_blank"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}
