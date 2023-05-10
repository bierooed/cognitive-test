import React, { useState } from "react";
import Input from "./Input";

import hideIcon from "./icons/hide.png";
import viewIcon from "./icons/view.png";

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <Input type="text" placeholderType="fullName" />
      <Input type="email" />
      <div className="relative">
        <Input type={!!passwordShown ? "text" : "password"} />
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
    </>
  );
}
