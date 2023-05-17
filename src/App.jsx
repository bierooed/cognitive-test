import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUserCredintals } from "./slices/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "./firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./helpers/notify";

function App() {
  const dispatch = useDispatch();
  const { userCredintals } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const changeLocation = (msg, type, ...paths) => {
    if (![...paths].includes(pathname)) {
      navigate("/");
      notify(msg, type);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserCredintals({ email: user.email }));
        dispatch(setAuth(true));
        changeLocation(
          "Already logged in to your account",
          "info",
          "/",
          "/test"
        );
      } else {
        changeLocation(
          "Please, log in to your account to access the website functionality!",
          "info",
          "/",
          "/signUp",
          "/signIn"
        );
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="text-center md:px-12 xs: px-4">
        {!!userCredintals.email && (
          <div className="">
            <h1>{userCredintals.email}</h1>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("SUCCESSFUL SIGN OUT");
                    dispatch(setAuth(false));
                    dispatch(setUserCredintals({}));
                    navigate("/");
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
    </>
  );
}

export default App;
