import React, { useState } from "react";
import aboutUsIllustration from "../aboutUsIllustration.png";
import scienceIllustration from "../science.png";
import { aboutUsTexts, scientificBasisTexts } from "../aboutUsTexts";
import MobileInfoBlock from "./MobileInfoBlock";
import MobilePopupInfo from "./MobilePopupInfo";

export default function MobileAboutUs() {
  const [textVisible, setTextVisible] = useState(false);
  const [popupInfo, setPopupInfo] = useState({ text: "", link: "" });

  const handleInfoBlock = (visibleStatus, info) => {
    setTextVisible(visibleStatus);
    setPopupInfo(info);
  };
  return (
    <>
      {textVisible === false ? (
        <>
          <MobileInfoBlock
            illustration={aboutUsIllustration}
            text={aboutUsTexts.fullText}
            heading="Kaufman test"
            link="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
            description={aboutUsTexts.description}
            handleFunction={handleInfoBlock}
          />
          <MobileInfoBlock
            illustration={scienceIllustration}
            text={scientificBasisTexts.fullText}
            heading="Scientific basis"
            description={scientificBasisTexts.description}
            handleFunction={handleInfoBlock}
          />
        </>
      ) : (
        <div className="md:hidden">
          <MobilePopupInfo
            handleFunction={(prop) => setTextVisible(prop)}
            text={popupInfo.text}
            link={popupInfo.link}
          />
        </div>
      )}
    </>
  );
}
