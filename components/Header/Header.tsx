import Image from "next/image";
import Link from "next/link";
import { menuItem } from "./menuLink";

const Header = () => {
  return (
    <nav className="mx-auto block w-full  rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <Link href="/" className="logo">
            <Image
              src="/assets/images/logo-no-background.svg"
              alt="Dhalparagp Logo"
              width={150}
              height={50}
              className="object-contain bg-white p-1 rounded"
            />
          </Link>
          <ul className="hidden items-center gap-6 lg:flex">
            {menuItem.map((menuLink, index) => (
              <li
                key={index}
                className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
              >
                <Link className="flex items-center" href={menuLink.link}>
                  {menuLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*Mobile menu*/}
      </div>
    </nav>
  );
};

export default Header;
