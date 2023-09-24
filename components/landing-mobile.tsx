import Image from "next/image";

export const LandingMobile = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[15rem] overflow-hidden bg-bg">
      <div className="mobile_bg">
        <Image
          width={1210}
          height={460}
          alt="Hero background"
          src="/mobilebg.svg"
        />
      </div>
      <div className="flex flex-row w-[1080px] justify-between absolute">
        <div className="flex flex-col justify-center">
          <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-primry bg-[#221611] z-10">
            <div className="flex flex-row items-center">
              <div className="relative h-5 w-5 mr-2">
                <Image fill alt="Phone icon" src="/mobile.svg" />
              </div>
              <p className="section_tag_title mr-1">Nova Mobile</p>
            </div>
          </div>
          <div>
            <h2 className="mobile_title mt-8">
              Built to look great
              <br />
              on any screen.
            </h2>
            <p className="mobile_description mt-4 z-10">
              Try Nova on your mobile device now.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            width={325}
            height={425}
            alt="Nova mobile screenshot"
            src="/mobile_screenshot.svg"
          />
        </div>
      </div>
    </div>
  );
};
