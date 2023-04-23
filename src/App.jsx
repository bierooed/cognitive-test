import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-center md:px-12 xs: px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
