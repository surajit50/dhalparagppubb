import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default async function UserPrivateLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { role: string } | undefined;
  const isStaff = user?.role === "user";

  if (!isStaff) redirect("/auth/login");
  return <>{children}</>;
}
