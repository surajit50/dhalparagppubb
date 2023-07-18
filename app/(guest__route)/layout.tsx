import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const metadata = {
  title: "Dhalpara Gram Panchayat",
  description: "Panchayat & Rural Development",
};

export default async function AdminPrivateLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
