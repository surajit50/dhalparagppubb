"use client"
import Image from "next/image";
import Link from "next/link";
import { menuItem } from "./menuLink";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b-2	 border-blue-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src="/assets/images/logo-no-background.svg"
            alt="Dhalparagp Logo"
            width={140}
            height={40}
            className=" text-white p-2 "
          />

          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {menuItem.map((menuLink, index) => (
            <li
              key={index}
              className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <Link className="mr-5 hover:text-gray-900 " href={menuLink.link}>
                {menuLink.text}
              </Link>
            </li>
          ))}
        </nav>

        <Link
          href="/auth/adminlogin"
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Admin Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
