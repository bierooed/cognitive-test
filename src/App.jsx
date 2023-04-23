import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { setLang } from "./slices/languageSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import paths from "./paths";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="text-center md:px-12 xs: px-4">
      <header className="flex md:justify-around xs: justify-between items-center pt-4 text-end">
        <div>
          <button onClick={() => dispatch(setLang("ru"))}>ru</button> /{" "}
          <button onClick={() => dispatch(setLang("en"))}>en</button>
        </div>
        <div>
          <Link
            to={paths.auth}
            className="text-white bg-[#1b1f27] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:focus:ring-blue-800"
          >
            <span className="px-2">Jump to test</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
