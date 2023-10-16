"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="w-full flex flex-col items-center px-5 md:px-0 py-12 overflow-x-hidden">
      <div className="hero_bg_mobile md:hidden">
        <Image
          quality={100}
          fill
          alt="Hero background"
          src="/hero_bg_mobile.svg"
        />
      </div>
      <div className="hero_bg hidden md:block">
        <Image quality={100} fill alt="Hero background" src="/hero_bg.svg" />
      </div>
      <div className="w-fit flex flex-row justify-between items-center px-2 py-2 cursor-pointer rounded-full border border-primry bg-[#221611] hover:bg-[#3E281F] transition-all z-10">
        <div className="flex flex-row items-center mr-4">
          <div className="bg-[#F56627] rounded-full px-3 py-1 mr-2">
            <p className="section_tag_name">New</p>
          </div>
          <p className="section_tag_title">Introducing personal bots</p>
        </div>
        <div className="relative h-4 w-4 mr-2">
          <Image fill alt="Arrow right icon" src="/arrow_right.svg" />
        </div>
      </div>

      <h1 className="hero_title mt-5 z-10">
        Nova - Your Custom AI Friend, Testingg
        <br />
        On-Demand Chat Anytime
      </h1>

      <p className="hero_description mt-4 z-10">
        Nova is your personalized AI companion for instant, 24/7 conversations.{" "}
        <br className="hidden md:block" />
        Craft your AI friend and chat anytime, anywhere.
      </p>

      <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-10 mt-12 z-10">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <button className="bg-white hover:bg-[#D5D5D5] transition-all py-4 md:py-5 px-8 md:px-10 rounded-full hero_button_text_black ">
            Get Started
          </button>
        </Link>

        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <div className="flex flex-row items-center space-x-2 cursor-pointer z-10">
            <p className="hero_button_text_white">Login</p>
            <div className="relative h-5 w-5">
              <Image
                fill
                src="/chevron_white.svg"
                alt="White right chevron icon"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-2 md:space-y-4 mt-12 z-10">
        <div className="flex flex-row items-center justify-center">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image
              className=" hover:scale-125 transition-all"
              fill
              src="/user1.png"
              alt="User"
            />
          </div>
          <div className="relative w-10 h-10 md:w-14 md:h-14 -ml-5">
            <Image
              className=" hover:scale-125 transition-all"
              fill
              src="/user2.png"
              alt="User"
            />
          </div>
          <div className="relative w-10 h-10 md:w-14 md:h-14 -ml-5">
            <Image
              className=" hover:scale-125 transition-all"
              fill
              src="/user3.png"
              alt="User"
            />
          </div>
          <div className="relative w-10 h-10 md:w-14 md:h-14 -ml-5">
            <Image
              className=" hover:scale-125 transition-all"
              fill
              src="/user4.png"
              alt="User"
            />
          </div>
        </div>
        <p className=" font-dmSans text-[16px] text-white font-normal">
          1,200+ reviews (4.8 of 5)
        </p>
      </div>

      <div className="relative mt-10 z-10">
        <Image
          quality={100}
          width={1580}
          height={950}
          src="/hero_img.png"
          alt="Nova dashboard screenshot"
        />
      </div>
    </div>
  );
};
