"use client";

import React from "react";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  return (
    <>
      <button
        className="middle none center mr-3 rounded-lg border border-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
};

export default SignOutButton;
