import Image from "next/image";

export const LandingMobile = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-28 md:mt-[15rem] overflow-hidden bg-bg">
      <div className="mobile_bg hidden md:block">
        <Image
          width={1210}
          height={460}
          alt="Hero background"
          src="/mobilebg.svg"
        />
      </div>
      <div className="mobile_bg md:hidden">
        <Image
          width={350}
          height={642}
          alt="Hero background"
          src="/mobilebg_mobile.svg"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-[1080px] items-center justify-center md:justify-between absolute">
        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-[#8343F3] bg-[rgba(131,67,243,0.1)] transition-all z-10">
            <div className="flex flex-row items-center">
              <div className="relative h-5 w-5 mr-2">
                <Image fill alt="Phone icon" src="/mobile.svg"/>
              </div>
              <p className="text-[#8343F3] mr-1">Nova Mobile</p>
            </div>
          </div>
          <div>
            <h2 className="mobile_title mt-5 md:mt-8">
              Built to look great
              <br />
              on any screen.
            </h2>
            <p className="mobile_description mt-2 md:mt-4 z-10">
              Try Nova on your mobile device now.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col">
            <Image
              width={325}
              height={425}
              alt="Nova mobile screenshot"
              src="/mobile_screenshot.svg"
            />
          </div>
        </div>

        <div className="md:hidden mt-5">
          <div className="flex flex-col">
            <Image
              width={295}
              height={395}
              alt="Nova mobile screenshot"
              src="/mobile_screenshot.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
