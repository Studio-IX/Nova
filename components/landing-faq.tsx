"use client";

import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

// Define types for your component's state
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
    return isQuestionOpen(index) ? "/chevron_up.svg" : "/chevron_down.svg"; // Define 'minus' and 'plus' variables
  };

  return (
    <div
      id="faq"
      className="w-full flex flex-col z-20 bg-background items-center py-20 bg-bg"
    >
      <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-primry bg-[#221611] mt-[15rem] z-10">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="FAQ icon" src="/faq.svg" />
          </div>
          <p className="section_tag_title mr-1">FAQ</p>
        </div>
      </div>
      <div>
        <h2 className="section_titles mt-8">Frequently Asked Questions</h2>
        <p className="hero_description mt-4 z-10">
          We answered questions so you don&apos;t have to ask them.
        </p>
      </div>

      <div className="flex flex-col justify-center w-[700px] space-y-4 mt-20">
        <div
          className={`bg-[#161616] border border-[#242424] rounded-[1.4rem] py-4 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(0)}
          >
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(0) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(1) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(2) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(3) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(4) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(5) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
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
            <h2 className="text-textprimary text-[16px] md:text-[20px] font-dmSans font-medium">
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
            in={isQuestionOpen(6) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-textsecondary font-dmSans font-normal text-md mt-2 w-full md:w-[700px]">
                AI Powered Invoicing is an innovative software solution that
                harnesses the power of artificial intelligence to simplify and
                automate the invoicing process. It uses advanced algorithms to
                streamline workflows, improve accuracy, and optimize payment
                management.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
