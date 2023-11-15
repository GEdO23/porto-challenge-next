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
        <div className="slider-container group">
          {/* Imagem */}
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].img.src})` }}
            className="slider-background"
          >
            <div className="slider-background-dados">
              <h2 className="slider-background-dados-tit">{slides[currentIndex].info.tit}</h2>
              <p className="slider-background-dados-desc">{slides[currentIndex].info.desc}</p>
              <div>
                <Link href={slides[currentIndex].url.href}>
                  <button className="btn-white">{slides[currentIndex].url.text}</button>
                </Link>

              </div>

            </div>
          </div>

          {/* Left Arrow */}
          <div className="left-arrow group-hover:block ">
            <LeftArrow onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="right-arrow group-hover:block ">
            <RightArrow onClick={nextSlide} size={30} />
          </div>

        </div>
    </>
  );
}
