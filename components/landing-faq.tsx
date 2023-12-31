"use client";

import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

type FaqState = null | number;

export const LandingFaq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<FaqState>(null);

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const isQuestionOpen = (index: number) => {
    return openQuestion === index;
  };

  const getIconSrc = (index: number) => {
    return isQuestionOpen(index) ? "/chevron_up.svg" : "/chevron_down.svg";
  };

  return (
    <div
      id="faq"
      className="w-full flex flex-col z-20 bg-background items-center py-0 md:py-20 px-5 md:px-0 bg-bg"
    >
      <div className="w-fit flex flex-row md:justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all mt-28 md:mt-[15rem] z-10">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="FAQ icon" src="/faq.svg"/>
          </div>
          <p className="text-[#8343F3] mr-1">FAQ</p>
        </div>
      </div>
      <div>
        <h2 className="section_titles mt-5 md:mt-8">
          Frequently Asked Questions
        </h2>
        <p className="hero_description mt-2 md:mt-4 z-10">
          We answered questions so you don&apos;t have to ask them.
        </p>
      </div>

      <div className="flex flex-col justify-center w-full md:w-[700px] space-y-4 mt-20">
        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(0)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              What is Nova?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(0)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(0) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Nova is an AI SaaS (Software as a Service) platform that allows
                users to create custom AI friends and personalities to chat with
                24/7. It provides a unique and interactive way for users to
                engage with AI-powered companions tailored to their preferences.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(1) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(1)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              How does Nova work?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(1)}
              alt="Expand"
              className={`icon ${isQuestionOpen(1) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(1) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Nova leverages advanced artificial intelligence technology to
                create customizable AI companions. Users can define the
                personality, traits, and behaviors of their AI friends. These AI
                companions are designed to engage in natural conversations with
                users, providing companionship, entertainment, and assistance as
                needed.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(2) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(2)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Is my data secure with Nova?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(2)}
              alt="Expand"
              className={`icon ${isQuestionOpen(2) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(2) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Yes, your data security is a top priority for Nova. We take
                extensive measures to ensure the security and privacy of your
                information. Our platform is built with robust security features
                and follows industry-standard encryption practices to protect
                your data from unauthorized access or breaches.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(3) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(3)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Can I use Nova for business purposes?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(3)}
              alt="Expand"
              className={`icon ${isQuestionOpen(3) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(3) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                While Nova is primarily designed for personal use and
                entertainment, it can also be utilized for certain business
                applications. Some businesses may find value in using Nova to
                create AI chatbots for customer support or engagement. However,
                please note that Nova&apos;s primary focus is on providing
                personalized AI companions for individuals.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(4) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(4)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              How do I get started with Nova?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(4)}
              alt="Expand"
              className={`icon ${isQuestionOpen(4) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(4) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Getting started with Nova is easy! Simply sign up for an account
                on our platform, and you&apos;ll have access to the tools and
                features to create your custom AI companion. You can define its
                personality, appearance, and chat preferences to make it
                uniquely yours.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(5) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(5)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Can I change my AI companion&apos;s personality over time?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(5)}
              alt="Expand"
              className={`icon ${isQuestionOpen(5) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(5) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Yes, you can absolutely change your AI companion&apos;s personality
                and characteristics over time. Nova offers flexibility, allowing
                you to adjust your AI friend&apos;s traits, behaviors, and
                conversation style as your preferences evolve. This ensures that
                your AI companion remains engaging and relevant to your needs.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(6) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(6)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              What platforms and devices does Nova support?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(6)}
              alt="Expand"
              className={`icon ${isQuestionOpen(6) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(6) || false}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[15px] md:text-md mt-2 w-full md:w-[620px]">
                Nova is designed to be accessible across various platforms and
                devices. You can interact with your AI companion on web
                browsers, mobile devices (iOS and Android), and even through
                dedicated applications. Our goal is to make Nova available
                wherever you are, ensuring seamless and convenient interactions
                with your AI friend.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
