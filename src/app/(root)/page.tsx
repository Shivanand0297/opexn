import EmblaCarousel from "@/components/embla-carousel/embla-carousel";
import HeroSlider from "@/components/hero-slider";
import { EmblaOptionsType } from "embla-carousel";
import { image1, image2, image3, image4, image5, image6 } from "@/public/images";

import "../../components/embla-carousel/embla.css";
import { ExampleComponentDemo } from "@/components/warp-background";
import { WarpBackground } from "@/components/ui/warp-background";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    {
      src: image1,
      label:
        "India's First Virtual Platform for Exhibitions & Networking Revolutionizing the way businesses connect, showcase, and grow 100% online.",
    },
    {
      src: image2,
      label:
        "Save Time. Save Money. Exhibit Smarter. Seamlessly explore, network, and transact without the hassle of physical events",
    },
    {
      src: image3,
      label:
        "One-Click Access to Deals, Samples & Offers Discover products, request samples, and secure exclusive deals—instantly.",
    },
    {
      src: image4,
      label:
        "Actionable Insights & Analytics for Smarter Decisions Track visitors, analyze trends, and optimize performance with real-time data.",
    },
    {
      src: image5,
      label:
        "Your Gateway to Sustainable, Global Exhibitions Connecting industries and advancing SDG goals through smarter, eco-friendly solutions.",
    },
    {
      src: image6,
      label:
        "Your Gateway to Sustainable, Global Exhibitions Connecting industries and advancing SDG goals through smarter, eco-friendly solutions.",
    },
  ];

  return (
    <section>
      {/* <HeroSlider /> */}
      <WarpBackground beamDuration={5} perspective={100}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </WarpBackground>

      {/* <div className="relative flex h-[calc(100vh-60px)]">
        <div className="z-10">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <RetroGrid />
      </div> */}
      {/* <ExampleComponentDemo/> */}
    </section>
  );
}
