import React from "react";
import aboutUsIllustration from "../aboutUsIllustration.png";
import scienceIllustration from "../science.png";
import { aboutUsTexts, scientificBasisTexts } from "../aboutUsTexts";
import DesktopInfoBlock from "./DesktopInfoBlock";

export default function DesktopAboutUs() {
  return (
    <div className="md:flex items-center flex-col xs: hidden">
      <div className="md:flex flex-col items-center">
        <DesktopInfoBlock
          illustration={aboutUsIllustration}
          text={aboutUsTexts.fullText}
        />
        <a
          target="_blank"
          className="mt-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
        >
          Read more at Wikipedia
        </a>
      </div>

      <DesktopInfoBlock
        illustration={scienceIllustration}
        text={scientificBasisTexts.fullText}
      />
    </div>
  );
}
