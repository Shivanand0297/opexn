"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import ShimmerButton from "@/components/ui/shimmer-button";

export const HeroScrollContainer = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mb-10 text-7xl font-semibold text-black dark:text-white">Exhibiting Now</h1>
          </>
        }
      >
        <Image
          src="https://images.pexels.com/photos/7852670/pexels-photo-7852670.jpeg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover"
          draggable={false}
        />
      </ContainerScroll>
      <ShimmerButton className="absolute bottom-[30%] left-1/2 -translate-x-1/2 dark:text-white">
        Enter Exhibition
        <ArrowRight className="ml-1" />
      </ShimmerButton>
    </div>
  );
};
