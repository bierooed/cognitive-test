import React from "react";
import translate from "../../../helpers/languageSwitcher";

export default function DesktopInfoBlock({ infoTopic, illustration }) {
  return (
    <>
      <div className="mb-6">
        <img className="w-96" src={illustration} />
      </div>
      <h1 className="text-xl mb-6">{translate(`${infoTopic}Heading`)}</h1>
      <p className="w-4/6">{translate(`${infoTopic}Text`)}</p>
    </>
  );
}
