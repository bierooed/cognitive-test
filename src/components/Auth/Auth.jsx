import React from "react";
import SignUp from "./Sign/SignUp";
import SignIn from "./Sign/SignIn";
import { Link } from "react-router-dom";

export default function Auth({ type, heading, authExtraText, authExtraPath }) {
  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-md text-center">{heading}</h1>
          {type === "signUp" ? <SignUp /> : <SignIn />}

          <div className="mt-4">
            <Link className="text-blue-500 underline" to={authExtraPath}>
              {authExtraText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
