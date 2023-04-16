import React, { useState } from "react";
import aboutUsIllustration from "../aboutUsIllustration.png";
import aboutUsTexts from "../aboutUsTexts";
import MobileInfoBlock from "./MobileInfoBlock";

export default function MobileAboutUs() {
  const [textVisible, setTextVisible] = useState(false);
  return (
    <>
      {textVisible === false ? (
        <MobileInfoBlock
          illustration={aboutUsIllustration}
          heading="Kaufman test"
          description={aboutUsTexts.description}
          handleFunction={(prop) => setTextVisible(prop)}
        />
      ) : (
        <div className="md:hidden">
          <div className="text-right mb-4">
            <button onClick={() => setTextVisible(false)} className="text-2xl">
              ×
            </button>
          </div>
          <p className="mb-6">{aboutUsTexts.fullText}</p>
          <a
            target="_blank"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Kaufman_Assessment_Battery_for_Children"
          >
            Read more in Wikipedia
          </a>
        </div>
      )}
    </>
  );
}
