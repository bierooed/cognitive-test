import React, { useState, useEffect } from "react";
import DesktopAboutUs from "./Desktop/DesktopAboutUs";
import MobileAboutUs from "./Mobile/MobileAboutUs";

export default function AboutUs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="font-medium">
      {windowWidth >= 768 && <DesktopAboutUs />}
      {windowWidth < 768 && <MobileAboutUs />}
    </main>
  );
}
