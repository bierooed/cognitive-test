import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUserCredintals } from "./slices/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "./firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(true));
        setUser(user);
      } else {
        dispatch(setAuth(false));
      }
    });
  }, []);

  return (
    <div className="text-center md:px-12 xs: px-4">
      {!!user && (
        <div className="">
          <h1>{user.email}</h1>
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("SUCCESSFUL SIGN OUT");
                  setUser(null);
                })
                .catch((error) => console.log(error));
            }}
          >
            Log Out
          </button>
        </div>
      )}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
