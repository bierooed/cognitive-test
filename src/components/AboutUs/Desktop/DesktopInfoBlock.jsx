import React from "react";

export default function DesktopInfoBlock({ illustration, text, heading }) {
  return (
    <>
      <div className="mb-6">
        <img className="w-96" src={illustration} />
      </div>
      <h1 className="text-xl mb-6">{heading}</h1>
      <p className="w-4/6">{text}</p>
    </>
  );
}
