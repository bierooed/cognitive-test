import React from "react";
import Link from "../Link";

export default function MobilePopupInfo({
  handleFunction,
  text,
  link,
  linkText,
}) {
  return (
    <div>
      <div className="text-right mb-4">
        <button onClick={() => handleFunction(false)} className="text-2xl">
          ×
        </button>
      </div>
      <p className="mb-6">{text}</p>
      {!!link && (
        <Link
          text={linkText}
          link="https://www.sciencedirect.com/topics/nursing-and-health-professions/kaufman-assessment-battery-for-children"
        />
      )}
    </div>
  );
}
