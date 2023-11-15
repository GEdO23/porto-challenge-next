"use client";

import Link from "next/link";
import { useState } from "react";
import { BsChevronCompactLeft as LeftArrow, BsChevronCompactRight as RightArrow } from "react-icons/bs";

export default function Slider({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;;
    setCurrentIndex(newIndex);
  };

  return (
    <>
        <div className="max-w-screen-xl h-[620px] w-full m-auto relative group">
          {/* Imagem */}
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].img.src})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <div className="flex flex-col top-[10%] -translate-y-[-10%] left-[5%] -translate-x-[-5%] gap-5">
              <h2 className=" text-white text-4xl">{slides[currentIndex].info.tit}</h2>
              <p className=" text-white text-md opacity-75 w-3/5">{slides[currentIndex].info.desc}</p>
              <div>
                <Link href={slides[currentIndex].url.href}>
                  <button className="btn-white">{slides[currentIndex].url.text}</button>
                </Link>

              </div>

            </div>
          </div>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl text-white p-2 bg-black/20 rounded-full cursor-pointer">
            <LeftArrow onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl text-white p-2 bg-black/20 rounded-full cursor-pointer">
            <RightArrow onClick={nextSlide} size={30} />
          </div>

        </div>
    </>
  );
}
