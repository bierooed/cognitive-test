import React from "react";

export default function MobilePopupInfo({ handleFunction, text, link }) {
  return (
    <div>
      <div className="text-right mb-4">
        <button onClick={() => handleFunction(false)} className="text-2xl">
          ×
        </button>
      </div>
      <p className="mb-6">{text}</p>
      {!!link && (
        <a
          target="_blank"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={link}
        >
          Read more in Wikipedia
        </a>
      )}
    </div>
  );
}
