import Image from "next/image";

export const LandingTestimonial = () => {
  return (
    <div
      id="testimonial"
      className="w-full flex flex-col z-20 bg-bg items-center py-0 md:py-20 px-5 md:px-0"
    >
      <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-primry bg-[#221611] mt-[15rem] z-10">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5 mr-2">
            <Image fill alt="Testimonial right icon" src="/testimonial.svg" />
          </div>
          <p className="section_tag_title mr-1">Testimonials</p>
        </div>
      </div>
      <div>
        <h2 className="section_titles mt-8">What are users saying</h2>
        <p className="hero_description mt-4 z-10">
          Our users continue to be the core of our business and their feedback
          vividly <br className="hidden md:block" /> illustrates the success of our efforts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center space-x-0 space-y-5 md:space-y-0 md:space-x-6 mt-20">
        <div className="flex flex-col bg-[#161616] border border-[#262424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[265px]">
          <p className="feature_description mt-1">
            Nova has become my go-to companion. It&apos;s like having a friend
            who&apos;s always there, ready to chat, share a joke, or lend a
            helping hand. The customization is incredible, making Nova feel
            truly like my own.
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/user1.png" alt="AI icon" />
            <div className="flex flex-col">
              <h4 className="feature_title">David Brown</h4>
              <p className="feature_description">User</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#161616] border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[265px]">
          <p className="feature_description mt-1">
            Nova has become my go-to companion. It&apos;s like having a friend
            who&apos;s always there, ready to chat, share a joke, or lend a
            helping hand. The customization is incredible, making Nova feel
            truly like my own.
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/user1.png" alt="AI icon" />
            <div className="flex flex-col">
              <h4 className="feature_title">David Brown</h4>
              <p className="feature_description">User</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#161616] border border-[#242424] rounded-[2rem] p-8 w-full md:w-[385px] h-full md:h-[265px]">
          <p className="feature_description mt-1">
            Nova has become my go-to companion. It&apos;s like having a friend
            who&apos;s always there, ready to chat, share a joke, or lend a
            helping hand. The customization is incredible, making Nova feel
            truly like my own.
          </p>
          <div className="flex flex-row space-x-4 items-center mt-6">
            <Image width={50} height={50} src="/user1.png" alt="AI icon" />
            <div className="flex flex-col">
              <h4 className="feature_title">David Brown</h4>
              <p className="feature_description">User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
