import React from "react";

export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      className="block border border-grey-light w-full p-3 rounded mb-4"
      placeholder={placeholder}
    />
  );
}
