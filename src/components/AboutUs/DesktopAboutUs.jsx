import React from "react";
import aboutUsIllustration from "./aboutUsIllustration.png";

export default function DesktopAboutUs() {
  return (
    <div className="md:flex justify-start items-center flex-col xs: hidden">
      <div className="mb-6">
        <img className="w-72" src={aboutUsIllustration} />
      </div>
      <p className="w-4/6">
        In today's society, more and more attention is being paid to child
        development and education. One of the most important aspects of a
        child's development is the assessment of his or her cognitive abilities,
        which determine future academic and career success. One of the most
        well-known and widely used tools for assessing the cognitive abilities
        of children is the Kaufman test. The Kaufman test is a psychological
        diagnostic test for assessing cognitive development. Its design
        incorporates several recent developments in psychological theory and
        statistical methodology. The test was developed by Alan S. Kaufman and
        Nadine L. Kaufman in 1983 and revised in 2004. The test has been
        translated and accepted in many countries.
      </p>
    </div>
  );
}
