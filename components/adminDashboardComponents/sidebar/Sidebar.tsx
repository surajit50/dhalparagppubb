"use client";
import React from "react";
import Link from "next/link";
import { SideNavLinks } from "@constants";
import Image from "next/image";

type ColumnProps = {
  title: string;
  links: string;
  key: any;
};

const SideMenuColumn = ({ title, links, key }: ColumnProps) => (
  <li className="items-center w-full" key={key}>
    <Link
      href={links}
      className="text-sm uppercase py-3 font-bold block px-3 text-gray-800 rounded-md hover:bg-gray-300 transition-all"
    >
      {title}
    </Link>
  </li>
);

export default function Sidebar() {
  return (
    <nav className=" hidden md:left-0 md:block min-h-screen md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white  flex-wrap items-center justify-between w-96 py-4 px-6">
      <Link href="/adminDashboard">
        <Image
          src="/images/logo-no-background.svg"
          width={120}
          height={100}
          alt="dhalapragp logo"
        />
      </Link>

      {/* Collapse */}

      {/* Divider */}
      <hr className="my-4 md:min-w-full" />
      {/* Heading */}

      {/* Navigation */}
      <ul className="md:flex-col md:min-w-full flex flex-col list-none">
        {SideNavLinks.map((items, i) => (
          <SideMenuColumn title={items.text} links={items.href} key={i} />
        ))}
      </ul>
    </nav>
  );
}
