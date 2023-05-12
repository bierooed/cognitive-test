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

function App() {
  const dispatch = useDispatch();
  const { userCredintals } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserCredintals({ email: user.email }));
      } else {
        if (pathname !== "/") {
          navigate("/");
        }
      }
    });
  }, []);

  return (
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
