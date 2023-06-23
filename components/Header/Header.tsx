"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItem } from "./menuLink";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* <!---------- Top Header Starts ---------> */}

      {/*<!---------- Top Header Ends --------->*/}

      {/*<!---------- Logo And Main Menu HTML Starts --------->*/}
      <div className="w-full relative bg-yellow-500 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.3)] p-2">
        <div className="container flex justify-between items-center">
          <div className="pl-4">
            <Link href="/" className="logo">
              <Image
                src="/assets/images/logo-no-background.svg"
                alt="Dhalparagp Logo"
                width={150}
                height={50}
                className="object-contain bg-white p-1 rounded"
              />
            </Link>
          </div>

          <div className="pr-4">
            {toggleMenu ? (
              <FiX
                width="50"
                height="50"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <FiAlignJustify
                onClick={() => setToggleMenu(!toggleMenu)}
                width="50"
                height="50"
              />
            )}
          </div>
          {toggleMenu && (
            <nav className="absolute w-full left-0 top-[53px] z-50 mt-1 bg-[#ffffff]">
              <ul className="flex  flex-col">
                {menuItem.map((menuLink, index) => {
                  return (
                    <li key={index} className="flex  hover:bg-red-200 ">
                      <Link
                        href={menuLink.link}
                        className=" font-sans flex justify-between w-full 	px-3 py-3  uppercase "
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        {menuLink.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
      {/*<!---------- Logo And Main Menu HTML Ends --------->*/}
    </header>
  );
};

export default Header;
