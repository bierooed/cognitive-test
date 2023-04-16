import React from "react";
import DesktopAboutUs from "./DesktopAboutUs";
import MobileAboutUs from "./MobileAboutUs";

export default function AboutUs() {
  return (
    <main className="font-medium px-12">
      <h1 className="mb-12 text-2xl font-bold">Cognitive test</h1>

      <DesktopAboutUs />
      <MobileAboutUs />
    </main>
  );
}
