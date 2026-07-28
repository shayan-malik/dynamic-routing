"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-700 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-extrabold tracking-wide text-yellow-600 transition hover:text-yellow-700">
            Products
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8 text-gray-300">

            <li>
              <Link
                href="/"
                className={`transition ${
                  pathname === "/"
                  ? "text-yellow-400 font-semibold border-b-2 p-2 transition-all ease-in-out duration-200"
                  : "text-gray-300 hover:text-yellow-400"
                } `}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`transition ${
                  pathname === "/about"
                  ? "text-yellow-400 font-semibold border-b-2 p-2 transition-all ease-in-out duration-200"
                  : "text-gray-300 hover:text-yellow-400"
                } `}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className={`${pathname === "/services"
                  ? "text-yellow-400 font-semibold border-b-2 p-2 transition-all ease-in-out duration-200"
                  : "text-gray-300 hover:text-yellow--400"
                }`}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${pathname === "/contact"
                  ? "text-yellow-400 font-semibold border-b-2 p-2 transition-all ease-in-out duration-200"
                  : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                Contact
              </Link>
            </li>

          </ul>
        </nav>
          <div className="sm:hidden block text-2xl">
            ☰
          </div>

      </div>
    </header>
  );
};

export default Header;