import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { setLang } from "./slices/languageSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="text-center p-2">
      <header className="text-end">
        <button onClick={() => dispatch(setLang("ru"))}>ru</button>/
        <button onClick={() => dispatch(setLang("en"))}>en</button>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
