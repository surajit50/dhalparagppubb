"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const HeroImage = () => {
  return (
    <Carousel
      className="rounded-xl"
      transition={{ type: "tween", duration: 1 }}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
    >
      <img
        src="/assets/images/heroImage.jpeg"
        className="h-[400px] w-full object-cover"
        alt="image 1"
      />
      <img
        src="/assets/images/2020063027.jpg"
        className="h-[400px] w-full object-cover"
        alt="image 3"
      />
      <img
        src="/assets/images/2020063026-1.jpg"
        className="h-[400px] w-full object-cover"
        alt="image 2"
      />
    </Carousel>
  );
};

export default HeroImage;
