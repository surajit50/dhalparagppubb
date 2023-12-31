import "../styles/globals.css";

import AuthProviders from "@components/AuthProviders";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const metadata = {
  title: "Dhalpara Gram Panchayat",
  description: "Panchayat & Rural Development",
};

export default async function RootLayout({ children }: Props) {
  return (
    <AuthProviders>
      <html lang="en">
        <body>
          <main className="app">
            <div>{children}</div>
          </main>
        </body>
      </html>
    </AuthProviders>
  );
}
