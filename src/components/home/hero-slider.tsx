import { image1, image2, image3, image4, image5, image6 } from "@/public/images";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/embla-carousel/embla-carousel";

import { WarpBackground } from "@/components/ui/warp-background";
import "../../components/embla-carousel/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    src: image1,
    heading: "India's First Virtual Platform for Exhibitions & Networking.",
    subHeading: "Revolutionizing the way businesses connect, showcase, and grow 100% online.",
  },
  {
    src: image2,
    heading: "Save Time. Save Money. Exhibit Smarter.",
    subHeading: "Seamlessly explore, network, and transact without the hassle of physical events.",
  },
  {
    src: image3,
    heading: "One-Click Access to Deals, Samples & Offers.",
    subHeading: "Discover products, request samples, and secure exclusive deals—instantly.",
  },
  {
    src: image4,
    heading: "Actionable Insights & Analytics for Smarter Decisions.",
    subHeading: "Track visitors, analyze trends, and optimize performance with real-time data.",
  },
  {
    src: image5,
    heading: "Your Gateway to Sustainable, Global Exhibitions.",
    subHeading: "Connecting industries and advancing SDG goals through smarter, eco-friendly solutions.",
  },
  {
    src: image6,
    heading: "Your Gateway to Sustainable, Global Exhibitions.",
    subHeading: "Connecting industries and advancing SDG goals through smarter, eco-friendly solutions.",
  },
];

export const HeroSlider = () => {
  return (
    <WarpBackground beamDuration={3} perspective={100}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </WarpBackground>
  );
};
