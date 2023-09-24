"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
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
                className={`${
                  index === navLinks.length - 1 ? "mr-0" : "mr-[60px]"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <div className="bg-white rounded-xl items-center justify-center flex w-[40px] h-[40px]">
                <Image width={20} height={10} src="/menu.svg" alt="menu"/>
          </div>
        </div>

        <div className="hidden md:block">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <button className="bg-[#1F1F1F] flex items-center border border-[#3B3B3B] py-4 px-8 w-fit rounded-full hero_button_text_white">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[0.1rem] bg-[#161616] z-20" />
    </div>
  );
};
