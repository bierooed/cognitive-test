import React, { useState } from "react";
import aboutUsIllustration from "../illustrations/aboutUsIllustration.png";
import scienceIllustration from "../illustrations/science.png";
import { aboutUsTexts, scientificBasisTexts } from "../aboutUsTexts";
import MobileInfoBlock from "./MobileInfoBlock";
import MobilePopupInfo from "./MobilePopupInfo";
import translate from "../../../helpers/languageSwitcher";
import { useSelector } from "react-redux";

export default function MobileAboutUs() {
  const currentLang = useSelector((state) => state.language.currentLang);
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
            translations={aboutUsTexts}
            link="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
            linkText={translate("readMore", aboutUsTexts, currentLang, {
              source: "Wikipedia",
            })}
            handleFunction={handleInfoBlock}
          />
          <MobileInfoBlock
            illustration={scienceIllustration}
            translations={scientificBasisTexts}
            link="https://www.sciencedirect.com/topics/nursing-and-health-professions/kaufman-assessment-battery-for-children"
            linkText={translate("readMore", scientificBasisTexts, currentLang, {
              source: "Science direct",
            })}
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
