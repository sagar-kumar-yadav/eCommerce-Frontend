import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";

const slides = [
  {
    url: "/banner/banner15.jpg",
  },
  {
    url: "/banner/banner13.jpg",
  },
  {
    url: "/banner/banner19.jpg",
  },
  {
    url: "/banner/banner18.jpg",
  },
  {
    url: "/banner/banner17.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [slides.length]);

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

  // console.log(slides[0]);
  return (
    <div className=" h-[780px] w-[97%] m-auto relative group">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${slide.url})`,
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          className="w-full h-full bg-center bg-cover duration-500  rounded-md absolute top-20 max-sm:top-12"
        >
          <span className="absolute bottom-80 text-white flex flex-col left-8 font-medium max-sm:bottom-[26rem]">
            URBANETHNIC
          </span>
          <div className=" uppercase absolute bottom-60 text-white flex flex-col left-48 font-medium max-sm:top-32 max-sm:hidden">
            <span className="">Find Thousand Of Local And</span>
            <span className="">International Brands to complete your</span>
            <span className="">Fashion needs</span>
          </div>
          <div className=" absolute right-0 bottom-32 flex flex-col max-sm:bottom-44 bg-black bg-opacity-50">
            <span className=" text-7xl font-extrabold text-white text-end max-sm:text-6xl">
              URBAN
            </span>
            <span className=" text-8xl font-bold text-white max-sm:text-7xl">
              ETHNIC
            </span>
          </div>
          <div className="absolute bottom-36 underline text-white flex left-8 font-medium">
            <span className="">SHOP NOW</span>
            {/* <span class="material-symbols-outlined">call_made</span> */}
          </div>
        </div>
      ))}
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
