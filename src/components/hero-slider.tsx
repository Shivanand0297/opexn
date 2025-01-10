"use client";

import Image from "next/image";
import { image1, image2, image3, image4 } from "@/public/images";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function HeroSlider() {
  return (
    <div>
      {/* <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <Image src={image1} width={1080} height={720} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <Image src={image2} width={1080} height={720} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <Image src={image3} width={1080} height={720} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <Image src={image4} width={1080} height={720} alt="Image 4" />
        </SplideSlide>
      </Splide> */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        orientation="horizontal"
        className="mx-auto w-[90%]"
      >
        <CarouselContent>
          <CarouselItem className="flex basis-11/12 items-center justify-center">
            <Image
              src={image1}
              width={1080}
              height={720}
              className="h-auto w-full object-cover"
              priority
              alt="Image 1"
            />
          </CarouselItem>
          <CarouselItem className="flex basis-11/12 items-center justify-center">
            <Image
              src={image2}
              width={1080}
              height={720}
              className="h-auto w-full object-cover"
              priority
              alt="Image 2"
            />
          </CarouselItem>
          <CarouselItem className="flex basis-11/12 items-center justify-center">
            <Image
              src={image3}
              width={1080}
              height={720}
              className="h-auto w-full object-cover"
              priority
              alt="Image 3"
            />
          </CarouselItem>
          <CarouselItem className="flex basis-11/12 items-center justify-center">
            <Image
              src={image4}
              width={1080}
              height={720}
              className="h-auto w-full object-cover"
              priority
              alt="Image 4"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
