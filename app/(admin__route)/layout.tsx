import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Sidebar from "@components/adminDashboardComponents/sidebar/Sidebar";
import AdminNavbar from "@components/adminDashboardComponents/Navbars/AdminNavbar";

interface Props {
  children: ReactNode;
}

export default async function AdminPrivateLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { role: string } | undefined;
  const isAdmin = user?.role === "admin";

  if (!isAdmin) redirect("/");
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-4  mx-auto w-full m-5">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
