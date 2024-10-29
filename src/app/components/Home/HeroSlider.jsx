"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-white  rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <Image
        src="/assets/Images/icons/nextArrow.svg"
        alt="logo"
        height={16}
        width={16}
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-white  rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <Image
        src="/assets/Images/icons/previousArrow.svg"
        alt="logo"
        height={16}
        width={16}
      />
    </div>
  );
}

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slider-custom h-full",
  };

  return (
    <section className="w-full rounded-sm overflow-hidden mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Slider {...settings}>
          <div className="slide-item relative w-full h-screen">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-grey z-10"></div>

            <Image
              src="/assets/Images/cover.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="fill"
              className="w-full h-full"
            />
            <div className="absolute bottom-16 right-16 text-white z-20 w-[30%] px-6 border-2 bg-yellow"></div>
          </div>

          <div className="slide-item relative w-full h-screen">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-grey z-10"></div>

            <Image
              src="/assets/Images/fund-an-event.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="fill"
              className="w-full h-full"
            />
            <div className="absolute bottom-16   text-white z-20 w-full px-6"></div>
          </div>
          <div className="slide-item relative w-full h-screen">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-grey z-10"></div>

            <Image
              src="/assets/Images/join-the-community.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="fill"
              className="w-full h-full"
            />
            <div className="absolute bottom-16   text-white z-20 w-full px-6"></div>
          </div>
          <div className="slide-item relative w-full h-screen">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-grey z-10"></div>

            <Image
              src="/assets/Images/host-an-event.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="fill"
              className="w-full h-full"
            />
            <div className="absolute bottom-16   text-white z-20 w-full px-6"></div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HeroSlider;
