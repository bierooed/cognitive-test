import React, { useState } from "react";
import Input from "./Input";

import hideIcon from "./icons/hide.png";
import viewIcon from "./icons/view.png";

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="bg-grey-lighter flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-xl text-center">Sign up</h1>

          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <div className="relative">
            <Input
              type={!!passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <span
              onClick={() => setPasswordShown(!passwordShown)}
              className="absolute inset-y-0 end-0 grid place-content-center px-4"
            >
              {!!passwordShown ? (
                <img className="w-4 h-4" src={viewIcon} />
              ) : (
                <img className="w-4 h-4" src={hideIcon} />
              )}
            </span>
          </div>

          <button className="w-full text-center text-white py-3 rounded bg-green bg-indigo-400 focus:outline-none my-1">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
