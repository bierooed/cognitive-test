import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { setAuth } from "./slices/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(true));
      } else {
        dispatch(setAuth(false));
      }
    });
  });

  return (
    <div className="text-center md:px-12 xs: px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
