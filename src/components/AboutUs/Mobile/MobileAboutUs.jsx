import React, { useState } from "react";
import aboutUsIllustration from "../illustrations/aboutUsIllustration.png";
import scienceIllustration from "../illustrations/science.png";
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
            infoTopic="aboutTest"
            illustration={aboutUsIllustration}
            link="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
            source="Wikipedia"
            handleFunction={handleInfoBlock}
          />
          <MobileInfoBlock
            infoTopic="scientific"
            illustration={scienceIllustration}
            link="https://www.sciencedirect.com/topics/nursing-and-health-professions/kaufman-assessment-battery-for-children"
            source="Science direct"
            handleFunction={handleInfoBlock}
          />
        </>
      ) : (
        <div className="md:hidden">
          <MobilePopupInfo
            handleFunction={(prop) => setTextVisible(prop)}
            text={popupInfo.text}
            link={popupInfo.link}
            linkText={popupInfo.linkText}
          />
        </div>
      )}
    </>
  );
}
