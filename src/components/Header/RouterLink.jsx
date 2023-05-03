import React from "react";
import { Link } from "react-router-dom";

export default function RouterLink({ text, path }) {
  return (
    <div>
      <Link
        to={path}
        className="xs: p-2 xs: text-xs text-white bg-[#1b1f27] hover:bg-[#050708]/80 font-medium rounded-full md:text-sm md:p-2.5 text-center inline-flex items-center"
      >
        <span className="xs: px-1.5 md:px-2">{text}</span>
      </Link>
    </div>
  );
}
