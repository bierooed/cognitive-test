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
        heading={aboutUsTexts.heading}
        text={aboutUsTexts.fullText}
        description={aboutUsTexts.description}
      />
      <Link
        text="Read more in Wikipedia"
        link="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
      />
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-1/2 h-px my-16 border-gray-300" />
        <span
          style={{ backgroundColor: "#f8f8f8" }}
          class="absolute px-3 italic"
        >
          and
        </span>
      </div>
      <DesktopInfoBlock
        illustration={scienceIllustration}
        heading={scientificBasisTexts.heading}
        text={scientificBasisTexts.fullText}
      />
      <Link
        text="Read more in Science Direct"
        link="https://www.sciencedirect.com/topics/nursing-and-health-professions/kaufman-assessment-battery-for-children"
      />
    </div>
  );
}
