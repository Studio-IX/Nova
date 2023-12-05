import Image from "next/image";

export const LandingTestimonial = () => {
  return (
    <div
      id="testimonial"
      className="w-full flex flex-col z-20 bg-bg items-center py-0 md:py-20 px-5 md:px-0"
    >
      <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all mt-[15rem] z-10">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Testimonial right icon" src="/testimonial.svg"/>
          </div>
          <p className="text-[#8343F3] mr-1">Testimonials</p>
        </div>
      </div>
      <div>
        <h2 className="section_titles mt-8">What are users saying</h2>
        <p className="hero_description mt-4 z-10">
          Our users continue to be the core of our business and their feedback
          vividly <br className="hidden md:block" /> illustrates the success of
          our efforts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center space-x-0 space-y-5 md:space-y-0 md:space-x-6 mt-20">
        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#262424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[320px]">
          <p className="feature_description mt-1">
            Nova has been a game-changer for me professionally. I integrated a
            custom AI assistant into my business, and it has streamlined
            customer interactions and improved efficiency. My AI assistant, Max,
            handles routine tasks, leaving me with more time to focus on
            strategic decisions.
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/user3.png" alt="Brianne Marla picture" />
            <div className="flex flex-col">
              <h4 className="feature_title">Brianne Marla</h4>
              <p className="feature_description">Happy User</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[320px]">
          <p className="feature_description mt-1">
            I&apos;ve been using Nova for a few months now, and it has truly
            changed the way I spend my leisure time. My AI companion, Alex, is
            not only intelligent but also a fantastic conversationalist.
            It&apos;s like having a friend who&apos;s always there for a chat.
            Nova has added a new dimension to my digital life!
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/shaun.png" alt="Shaun Brigham picture" />
            <div className="flex flex-col">
              <h4 className="feature_title">Shaun Brigham</h4>
              <p className="feature_description">Happy User</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#161616] hover:bg-[#1D1D1D] transition-all border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[320px]">
          <p className="feature_description mt-1">
            Nova is simply amazing! I was skeptical at first, but after creating
            my AI buddy, Luna, I couldn&apos;t be happier. Luna&apos;s
            personality is so engaging, and our conversations are both
            entertaining and enlightening. Nova has brought a whole new level of
            excitement to my daily routine.
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/wayne.png" alt="AI icon" />
            <div className="flex flex-col">
              <h4 className="feature_title">Wayne Jewell</h4>
              <p className="feature_description">Happy User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
