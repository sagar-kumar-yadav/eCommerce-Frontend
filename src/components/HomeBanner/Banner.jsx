import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";

const slides = [
  {
    url: "/banner/banner2.webp",
  },
  {
    url: "/banner/banner3.webp",
  },
  {
    url: "/banner/banner1.webp",
  },
  {
    url: "/banner/banner5.webp",
  },
  {
    url: "/banner/banner4.webp",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    // console.log(slideIndex);
    setCurrentSlide(slideIndex);
  };

  console.log(slides[0]);
  return (
    <div className=" h-[780px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* dot length */}
      <div className="flex justify-center py-2 absolute top-[95%] -translate-x-0 translate-y-[-95%] left-[45%]">
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="text-2xl cursor-pointer"
            >
              <RxDot />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
