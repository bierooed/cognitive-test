import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-center p-2">
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
