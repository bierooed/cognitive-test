import React from "react";
import { useSelector } from "react-redux";
import SignUp from "./Sign/SignUp";

export default function Auth() {
  const { isAuth } = useSelector((state) => state.auth);

  return <div>{isAuth ? "You already have an account!" : <SignUp />}</div>;
}
