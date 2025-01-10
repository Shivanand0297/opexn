"use client";

import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { usePrevNextButtons } from "./embla-carousel-arrow-buttons";
import { useAutoplay } from "./embla-carousel-autoplay";
import { useAutoplayProgress } from "./embla-carousel-autoplay-progress";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  slides: {
    src: StaticImageData;
    label: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000 }), ClassNames()]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className="embla__slide" key={item.label}>
              {/* <div className="embla__slide__number">
              </div> */}
              <div className="absolute left-4 top-10 bg-primary/30 p-2 text-sm font-semibold text-primary-foreground md:text-base lg:text-xl">
                <p>{item.label}</p>
              </div>
              <Image
                src={item.src}
                width={1080}
                height={720}
                className="h-auto w-full select-none rounded-md object-cover"
                priority
                alt={item.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <Button
            size="icon"
            variant="outline"
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          >
            <ChevronRight />
          </Button>
          <Button
            // className="embla__play"
            size="icon"
            variant="outline"
            onClick={toggleAutoplay}
            type="button"
          >
            {autoplayIsPlaying ? <Pause /> : <Play />}
          </Button>
        </div> */}

        <div className={cn("embla__progress", !showAutoplayProgress && "embla__progress--hidden")}>
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? "Stop" : "Start"}
        </button> */}
      </div>
      <div className="embla__buttons">
        <Button
          size="icon"
          variant="outline"
          onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        >
          <ChevronRight />
        </Button>
        <Button
          // className="embla__play"
          size="icon"
          variant="outline"
          onClick={toggleAutoplay}
          type="button"
        >
          {autoplayIsPlaying ? <Pause /> : <Play />}
        </Button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
