import React from "react";
import aboutUsIllustration from "../illustrations/aboutUsIllustration.png";
import scienceIllustration from "../illustrations/science.png";
import { aboutUsTexts, scientificBasisTexts } from "../aboutUsTexts";
import DesktopInfoBlock from "./DesktopInfoBlock";
import Link from "../Link";

export default function DesktopAboutUs() {
  return (
    <div className="md:flex items-center flex-col xs: hidden">
      <DesktopInfoBlock
        illustration={aboutUsIllustration}
        translations={aboutUsTexts}
      />
      <Link
        source="Wikipedia"
        translations={aboutUsTexts}
        link="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
      />
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-1/2 h-px my-16 border-gray-300" />
        <span
          style={{ backgroundColor: "#f8f8f8" }}
          className="absolute px-3 italic"
        >
          and
        </span>
      </div>
      <DesktopInfoBlock
        illustration={scienceIllustration}
        translations={scientificBasisTexts}
      />
      <Link
        source="Science Direct"
        translations={scientificBasisTexts}
        link="https://www.sciencedirect.com/topics/nursing-and-health-professions/kaufman-assessment-battery-for-children"
      />
    </div>
  );
}
