import React from "react";
import DesktopAboutUs from "./Desktop/DesktopAboutUs";
import MobileAboutUs from "./Mobile/MobileAboutUs";

export default function AboutUs() {
  return (
    <main className="font-medium md:px-12 xs: px-6">
      <h1 className="mb-12 text-2xl font-bold">Cognitive test</h1>

      <DesktopAboutUs />
      <MobileAboutUs />
    </main>
  );
}
