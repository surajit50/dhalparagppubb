"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
function AuthPublicProfileMenu() {
  const { data, status } = useSession();
  const isAuth = status === "authenticated";
  if (isAuth) {
    return (
      <p>
        <button onClick={() => signOut()}>Logout</button>
      </p>
    );
  }

  return <div>AuthProfileMenu</div>;
}

export default AuthPublicProfileMenu;
