import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingFeatures } from "@/components/landing-features";
import { LandingPricing } from "@/components/landing-pricing";
import { LandingTestimonial } from "@/components/landing-testimonial";
import { LandingMobile } from "@/components/landing-mobile";
import { LandingFaq } from "@/components/landing-faq";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  return (
    <div className="h-full bg-bg">
      <LandingNavbar />
      <LandingHero />
      <LandingFeatures />
      <LandingPricing />
      <LandingTestimonial />
      <LandingMobile />
      <LandingFaq />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
