import React from "react";

export default function Link({ text, link }) {
  return (
    <a
      target="_blank"
      className="mt-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={link}
    >
      {text}
    </a>
  );
}
