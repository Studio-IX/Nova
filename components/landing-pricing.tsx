"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";

export const LandingPricing = () => {
  const { isSignedIn } = useAuth();
  const { toast } = useToast();

  return (
    <div
      id="pricing"
      className="w-full flex flex-col z-20 bg-bg items-center px-5 md:px-0 md:py-20"
    >

      <div className="w-fit flex flex-row justify-between items-center px-2 py-2 rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all z-10">
        <div className="flex flex-row items-center mr-4">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Arrow right icon" src="/pricing.svg" className="filter hue-rotate-[260deg] brightness-65"/>
          </div>
          <p className="text-[#8343F3]">Pricing</p>
        </div>
      </div>

      <div>
        <h2 className="section_titles mt-5 md:mt-8">Pricing Plans</h2>
        <p className="hero_description mt-2 md:mt-4 z-10">
          Tailored options to suit every budget, so you can chat with your
          <br className="hidden md:block" /> AI companion effortlessly.
        </p>
      </div>

      {/* Monthly / Yearly */}
      <div></div>

      <div className="flex flex-col md:flex-row items-center w-full md:w-fit justify-between space-y-5 md:space-y-0 space-x-0 md:space-x-10 mt-10 md:mt-20">
        <div className="flex flex-col items-center justify-center w-full md:w-[385px] h-[680px] pt-[52px] bg-[#161616] border border-[#242424] rounded-[1.8rem]">
          <h6 className="pricing_title">Free</h6>
          <p className="pricing_description w-[310px] mt-4">
            Nova comes loaded with pre-created personalities and popular
            individuals dead and alive, Try Albert Einstein or Elon Musk for
            example.
          </p>

          <h6 className="mt-10 text-[16px] font-dmSans font-normal text-[#9B9CA1]">
            <span className="text-[38px] font-dmSans font-semibold text-white">
              $0{" "}
            </span>
            /month
          </h6>

          <div className="w-full flex flex-col items-start justify-center">
            <div className="flex w-full justify-center items-center my-12">
              <div className="h-[0.1rem] w-[280px] bg-[#242424]" />
            </div>
            <div className="w-full px-10 space-y-2">
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Maximum 2 personalities</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Normal Chats</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Basic AI model</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Email support</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <button className="bg-[#1F1F1F] hover:bg-[#F56627] transition-all border border-[#3B3B3B] py-4 md:py-5 px-28 w-fit rounded-full hero_button_text_white mt-10">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-[385px] h-[680px] bg-[#161616] border border-[#242424] rounded-[1.8rem]">
          <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all">
            <div className="flex flex-row items-center">
              <div className="relative h-5 w-5 mr-2">
                <Image fill alt="Arrow right icon" src="/star.svg" className="filter hue-rotate-[260deg] brightness-50"/>
              </div>
              <p className="text-[#8343F3] mr-1">Best Value</p>
            </div>
          </div>
          <h6 className="pricing_title mt-4">Premium</h6>
          <p className="pricing_description w-[310px] mt-4">
            Nova comes loaded with pre-created personalities and popular
            individuals dead and alive, Try Albert Einstein or Elon Musk for
            example.
          </p>

          <h6 className="mt-10 text-[16px] font-dmSans font-normal text-[#9B9CA1]">
            <span className="text-[38px] font-dmSans font-semibold text-white">
              $19{" "}
            </span>
            /month
          </h6>

          <div className="w-full flex flex-col items-start justify-center">
            <div className="flex w-full justify-center items-center my-12">
              <div className="h-[0.1rem] w-[280px] bg-[#242424]" />
            </div>
            <div className="w-full px-10 space-y-2">
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Maximum 20 personalities</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Secure & Encrypted Chats</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Advanced AI model</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Email support</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href="https://studioixagency.lemonsqueezy.com/checkout/buy/94dc56f6-6a23-4bf3-870c-6feedebaec7e">
                <button className="bg-white hover:bg-[#D5D5D5] transition-all py-4 md:py-5 px-28 w-fit rounded-full hero_button_text_black mt-10">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
