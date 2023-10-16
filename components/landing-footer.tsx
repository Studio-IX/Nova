import Image from "next/image";

export const LandingFooter = () => {
  return (
    <div className="w-full flex flex-col z-20 bg-bg items-center pt-40 md:pt-[20rem] pb-20 px-10 md:px-0">
      <div className="flex flex-col md:flex-row w-full md:w-[1280px] justify-between">
        <div className="">
          <Image width={78} height={25} alt="Nova logo" src="/logo.svg" />
        </div>

        <div className="md:hidden">
          <div className="mt-5 w-full flex flex-row space-x-28">
            <div className="mt-10 md:mt-0">
              <p className="footer_title">Product</p>
              <p className="footer_item mt-4">Pricing</p>
              <p className="footer_item mt-3">Features</p>
              <p className="footer_item mt-3">Testimonials</p>
            </div>

            <div className="mt-10 md:mt-0">
              <p className="footer_title">More</p>
              <p className="footer_item mt-4">Studio IX</p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0 hidden md:block">
          <p className="footer_title">Product</p>
          <div className="mt-4">
            <a href="#pricing" className="footer_item">
              Pricing
            </a>
          </div>
          <div className="mt-4">
            <a href="#features" className="footer_item">
              Features
            </a>
          </div>
          <div className="mt-4">
            <a href="#testimonial" className="footer_item">
              Testimonials
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="footer_title">Resources</p>

          <div className="mt-4">
            <a href="#faq" className="footer_item">
              FAQ
            </a>
          </div>

          <div className="mt-4">
            <a href="mailto:studioix.agency" className="footer_item">
              Contact
            </a>
          </div>
          <a href="https://childlike-brow-7b5.notion.site/Nova-Terms-of-Service-acb574ffd87f4f99b6fe8301e52ed2cd?pvs=4" className="footer_item mt-3">
            <p className="footer_item mt-3">Terms of Services</p>
          </a>
          <a href="https://childlike-brow-7b5.notion.site/Nova-Privacy-Policy-94489190271d431d842b61a71eea43dc?pvs=4">
            <p className="footer_item mt-3">Privacy Policy</p>
          </a>
        </div>

        <div className="mt-10 md:mt-0 hidden md:block">
          <p className="footer_title">More</p>
          <div className="mt-4">
            <a href="https://studioix.agency" className="footer_item mt-4">
              Studio IX
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-end md:px-[19rem] mt-20">
        <div className="flex flex-row w-fit bg-[#161616] items-center justify-center px-7 md:px-8 py-4 rounded-full">
          <div className="w-4 h-4 rounded-full bg-[#48AF68] mr-4" />
          <p className="text-white text-[15px] md:text-[18px] font-dmSans font-normal">
            All systems normal
          </p>
        </div>
      </div>

      <div className="w-full md:w-[1310px] mt-10">
        <div className="h-[0.1rem] bg-[#161616]" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-[1280px] mt-12">
        <p className="footer_copyright">
          © 2023 Nova. Created by{" "}
          <a className=" underline" href="https://studioix.agency">
            Studio IX
          </a>
        </p>

        <div className="flex flex-row space-x-6 mt-8 md:mt-0">
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="instagram.svg"
            alt="Instagram logo"
          />
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="twitter.svg"
            alt="Twitter logo"
          />
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="github.svg"
            alt="Github logo"
          />
        </div>
      </div>
    </div>
  );
};
