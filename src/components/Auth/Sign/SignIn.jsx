import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <Input type="email" />
      <Input type="password" />
    </>
  );
}
