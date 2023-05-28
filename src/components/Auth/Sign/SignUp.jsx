import React, { useState } from "react";
import Input from "./Input";

import hideIcon from "./icons/hide.png";
import viewIcon from "./icons/view.png";
import translate from "../../../helpers/languageSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpInfo } from "../../../slices/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import notify from "../../../helpers/notify";

export default function SignUp() {
  const dispatch = useDispatch();
  const { email, fullName, password } = useSelector(
    (state) => state.auth.signUp
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const handleInput = (value, type) => {
    dispatch(setSignUpInfo({ value, type }));
  };

  const signUp = () => {
    console.log(fullName);
    if (fullName.length > 1) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredintal) => {
          console.log(userCredintal.user, " SUCCESSFUL SIGNED UP");
          notify(`Welcome, ${fullName}!`, "success");
        })
        .catch((err) => {
          notify(`${err.message.slice(9)}`, "error");
        });
    } else {
      notify("Full Name should be at least 2 characters", "error");
    }
  };
  return (
    <>
      <Input type="text" placeholderType="fullName" handleInput={handleInput} />
      <Input type="email" handleInput={handleInput} />
      <div className="relative">
        <Input
          type={!!passwordShown ? "text" : "password"}
          handleInput={handleInput}
        />
        <span
          onClick={() => setPasswordShown(!passwordShown)}
          className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
        >
          {!!passwordShown ? (
            <img className="w-4 h-4" src={viewIcon} />
          ) : (
            <img className="w-4 h-4" src={hideIcon} />
          )}
        </span>
      </div>
      <button
        onClick={signUp}
        className="w-full text-center text-white py-3 rounded bg-green bg-indigo-400 hover:bg-indigo-500 focus:outline-none my-1"
      >
        {translate("signUpBtnText")}
      </button>
    </>
  );
}
