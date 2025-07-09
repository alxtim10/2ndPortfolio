"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./EmblaCarousel.css";

import { motion } from "framer-motion";

const EmblaCarousel = () => {
  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const images = [
    "/images/projects/bchain.png",
    "/images/projects/asc.png",
    "/images/projects/1.png",
    "/images/projects/2.png",
    "/images/projects/3.png",
  ];

  const imageByIndex = (index) => images[index % images.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="embla"
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EmblaCarousel;
