"use client";

import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-gray-200 border-gray-900 px-4 py-2">
        <div className="flex flex-wrap justify-between items-center max-w-screen">
          <Link className="font-bold" href={"/"}>
            GoogleAuth
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              href={"/about"}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              About
            </a>
            <a
              href={"/contact"}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
