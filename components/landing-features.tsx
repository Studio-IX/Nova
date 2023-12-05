"use client"

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingFeatures = () => {
  const { isSignedIn } = useAuth();
  return (
    <div
      id="features"
      className="w-full flex flex-col z-20 bg-bg md:py-20 px-5 md:px-0 items-center"
    >

      <div className="w-fit flex flex-row justify-between items-center px-2 py-2 rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all z-10">
        <div className="flex flex-row items-center mr-4">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Arrow right icon" src="/features.svg" className="filter hue-rotate-[260deg] brightness-150"/>
          </div>
          <div className="bg-[#8343F3] rounded-full px-3 py-1 mr-2">
            <p className="text-white">New</p>
          </div>
          <p className="text-[#8343F3]">Introducing personal bots</p>
        </div>
      </div>

      <div>
        <h2 className="section_titles mt-5 md:mt-8">Nova features</h2>
        <p className="hero_description mt-2 md:mt-4 z-10">
          Discover Nova&apos;s Powerful Features: Tailor-made AI companionship
          and
          <br className="hidden md:block" />
          endless conversation possibilities.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-6 mt-10 md:mt-20 space-y-5 md:space-y-0">
        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/ai.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">Personalization</h4>
          <p className="feature_description mt-1">
            Customize your AI companion&apos;s personality, interests, and
            responses to create a truly unique chat experience.
          </p>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/learn.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">Learning and Adaptation</h4>
          <p className="feature_description mt-1">
            Nova learns from your interactions, evolving to understand you
            better and provide more relevant responses over time.
          </p>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/multipurpose.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">Multi-Purpose</h4>
          <p className="feature_description mt-1">
            From casual chats to task assistance, trivia, and even as a creative
            writing partner.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-6 mt-5 md:mt-6 space-y-5 md:space-y-0">
        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/time.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">24/7 Availability</h4>
          <p className="feature_description mt-1">
            Chat with your AI friend anytime, day or night, for companionship,
            assistance, or just a friendly conversation.
          </p>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/security.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">Privacy and Security</h4>
          <p className="feature_description mt-1">
            Your conversations with Nova are kept private and secure, ensuring
            your data is protected at all times.
          </p>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-[215px]">
          <Image width={26} height={26} src="/quick.svg" alt="AI icon" />
          <h4 className="feature_title mt-4">Easy Setup</h4>
          <p className="feature_description mt-1">
            Get started with Nova quickly with an intuitive interface that
            guides you through the customization process.
          </p>
        </div>
      </div>

      <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-primry bg-[#221611]  hover:bg-[#3E281F] transition-all mt-20 md:mt-[15rem] z-10">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Arrow right icon" src="/features.svg" />
          </div>
          <p className="section_tag_title mr-1">Personal AI Companion</p>
        </div>
      </div>

      <div>
        <h2 className="section_titles mt-5 md:mt-8">And so much more</h2>
        <p className="hero_description mt-2 md:mt-4 z-10">
          Top of the line AI features which guarantees a better experience,
          explore the possibilities,
          <br className="hidden md:block" />
          and unlock the full potential of what Nova has to offer.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:space-x-[20rem] mt-20 md:mt-32">
        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex justify-center items-center w-11 h-11 cursor-pointer rounded-md border border-primry bg-[#221611] z-10">
              <div className="relative h-4 w-4">
                <Image fill alt="Bubble icon" src="/bubbles.svg" />
              </div>
            </div>
            <p className="section_tag_title">AI Companion</p>
          </div>
          <h5 className="feature_sub_title mt-4 md:mt-8">
            Personal AI Companion
          </h5>
          <p className="feature_description mt-0 md:mt-2">
            Top of the line AI features which guarantees a better
            <br className="hidden md:block" />
            experience, explore the possibilities and unlock the full
            <br className="hidden md:block" />
            potential of what Nova has to offer.
          </p>

          <button className="bg-[#1F1F1F] hover:bg-[#F56627] transition-all flex items-center border border-[#3B3B3B] py-4 md:py-5 px-6 md:px-10 w-fit rounded-full hero_button_text_white mt-5 md:mt-10">
            Learn More
            <span className="ml-3">
              <Image
                width={8}
                height={8}
                src="/chevron_white.svg"
                alt="White right chevron icon"
              />
            </span>
          </button>
        </div>

        <div className="mt-20 md:mt-0">
          <Image
            width={440}
            height={515}
            alt="Companion graphic"
            src="/companion.svg"
          />
        </div>
      </div>

      <div
        id="about"
        className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-primry bg-[#221611] hover:bg-[#3E281F] transition-all mt-40 z-10"
      >
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Arrow right icon" src="/features.svg" />
          </div>
          <p className="section_tag_title mr-1">Personalities</p>
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <h2 className="section_titles mt-5 md:mt-8">
          All your favourite personalities
        </h2>
        <p className="hero_description mt-2 md:mt-4 z-10">
          Nova comes loaded with pre-created personalities and popular
          individuals
          <br className="hidden md:block" />
          dead and alive, Try Albert Einstein or Elon Musk for example
        </p>

        <div className="hidden md:block">
          <div className="personalities mt-32">
            <Image
              width={550}
              height={550}
              alt="Nova personalities"
              src="/personalities.svg"
            />
            <Image
              width={100}
              height={100}
              alt="Nova logo"
              src="/roundlogo.svg"
            />
          </div>
        </div>

        <div className="md:hidden">
          <div className="personalities mt-0">
            <Image
              width={320}
              height={320}
              alt="Nova personalities"
              src="/personalities.svg"
            />
            <Image
              width={25}
              height={25}
              alt="Nova logo"
              src="/roundlogo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
