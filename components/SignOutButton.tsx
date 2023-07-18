"use client";

import React from "react";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default SignOutButton;
