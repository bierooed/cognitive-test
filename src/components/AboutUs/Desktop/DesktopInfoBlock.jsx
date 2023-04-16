import React from "react";

export default function DesktopInfoBlock({ illustration, text, link }) {
  return (
    <>
      <div className="mb-6">
        <img className="w-96" src={illustration} />
      </div>
      <p className="w-4/6">{text}</p>
    </>
  );
}
