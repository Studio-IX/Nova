"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex flex-col z-20 bg-bg">
      <div className="flex flex-row justify-between py-0 md:py-1 items-center px-5 md:px-40 z-20">
        <div className="relative h-20 w-20">
          <Image fill alt="Nova logo" src="/logo.svg" />
        </div>

        <div className="-mr-12">
          <ul className="list-none sm:flex hidden items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-dmSans font-normal text-[18px] text-[#9B9CA1] hover:text-white transition-colors ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-[60px]"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden justify-end items-center">
          <div
            className="bg-white rounded-xl items-center justify-center flex w-[40px] h-[40px]"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Image
              width={20}
              height={10}
              src={toggle ? "/close.svg" : "menu.svg"}
              alt="menu"
            />
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-bg border border-[#242424] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-dmSans font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white mr-10`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <button className="bg-[#1F1F1F] hover:bg-[#8343F3] transition-all ease-in-out duration-300 flex items-center border border-[#3B3B3B] py-4 px-8 w-fit rounded-full hero_button_text_white">
              {isSignedIn ? "Dashboard" : "Get Started"}
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[0.1rem] bg-[#161616] z-20" />
    </div>
  );
};
