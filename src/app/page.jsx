"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BsChevronCompactLeft as LeftArrow,
  BsChevronCompactRight as RightArrow,
} from "react-icons/bs";

export default function Home() {
  const slider = [
    {
      id: 1,
      info: {
        tit: "Contrate sua bike com IA",
        desc: "Um novo meio de contratar seguros bike, utilizando inteligência artificial para uma nova experiência!",
      },
      img: {
        src: "/slides/imagemBike.jpg",
        alt: "Imagem de Fundo",
      },
      url: {
        href: "http://localhost:3000/seguros",
        text: "Ver Seguros"
      }
    },
    {
      id: 2,
      info: {
        tit: "Cursos Gamificados",
        desc: "Venha ver nosso novo curso gamificado criado especialmente para você! Aprenda mais sobre seguros bike conosco de forma gratuita e eficiente.",
      },
      img: {
        src: "/slides/imagemGame.jpg",
        alt: "Imagem de Fundo",
      },
      url: {
        href: "http://localhost:3000/gamificacao",
        text: "Acessar"
      }
    },
    {
      id: 3,
      info: {
        tit: "Equipe de Desenvolvimento",
        desc: "Aqui você poderá ver cada membro da equipe que realizou este projeto! Venha conhecer a startup OM. Corp.",
      },
      img: {
        src: "/slides/imagemEquipe.jpg",
        alt: "Imagem de Fundo",
      },
      url: {
        href: "http://localhost:3000/team",
        text: "Conhecer Equipe"
      }
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="pt-16">
        <div className="max-w-screen-xl h-[620px] w-full m-auto relative group">
          {/* Imagem */}
          <div
            style={{ backgroundImage: `url(${slider[currentIndex].img.src})` }}
            className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <div className="w-full h-full flex flex-col top-[10%] -translate-y-[-10%] left-[5%] -translate-x-[-5%] gap-5">
              <h2 className=" text-white text-4xl">{slider[currentIndex].info.tit}</h2>
              <p className=" text-white text-md opacity-75 w-3/5">{slider[currentIndex].info.desc}</p>
              <Link href={slider[currentIndex].url.href}>
                <button className="btn btn-white">{slider[currentIndex].url.text}</button>
              </Link>

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
      </div>

      {/* <h1 className=" text-4xl">HOME</h1>
      <h2 className=" text-2xl">Pagina Principal</h2>
      <Link href="/seguros" className=" text-blue-600 underline">Contratos Seguro de Bike</Link>


      <h2 className=" text-2xl">Imagens</h2>
      <ul>
        {
          slider.map((slide)=> (
            <li key={slide.id}>
              <Image
                src={slide.img.src}
                alt={slide.img.alt}
                layout="fill"
                objectFit="cover"
                className=" -z-10"
              />
              <h3 className=" text-red-600 text-xl">{slide.info.tit}</h3>
              <p>{slide.info.desc}</p>

            </li>
          ))
        }
      </ul> */}
    </>
  );
}
