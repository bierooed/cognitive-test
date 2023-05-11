import React, { useState } from "react";
import Input from "./Input";
import { setSignInInfo } from "../../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import translate from "../../../helpers/languageSwitcher";
import auth from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import paths from "../../../paths";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth.signIn);
  const navigate = useNavigate();

  const handleInput = (value, type) => {
    dispatch(setSignInInfo({ value, type }));
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Input type="email" handleInput={handleInput} />
      <Input type="password" handleInput={handleInput} />
      <button
        onClick={signIn}
        className="w-full text-center text-white py-3 rounded bg-green bg-indigo-400 hover:bg-indigo-500 focus:outline-none my-1"
      >
        {translate("signInBtnText")}
      </button>
    </>
  );
}
