import Image from "next/image";
import Link from "next/link";
import {BsChevronCompactLeft as LeftArrow, BsChevronCompactRight as RightArrow} from 'react-icons/bs';

export default async function Home() {

  const resposta = await fetch("http://localhost:3000/api/base/base-slider/GET/0");
  const slider = await resposta.json();

  return (
    <>
    <div className="pt-16">
      
      <div className="max-w-screen-xl h-[620px] w-full m-auto relative group">
        {/* Left Arrow */}
        <div 
        className="
        hidden group-hover:block 
        absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 
        text-2xl text-white 
        p-2 bg-black/20 rounded-full 
        cursor-pointer
        ">
          <LeftArrow size={30}/>

        </div>
        
        {/* Right Arrow */}
        <div 
        className="
        hidden group-hover:block 
        absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 
        text-2xl text-white 
        p-2 bg-black/20 rounded-full 
        cursor-pointer
        ">
          <RightArrow size={30}/>

        </div>

        {/* Imagem */}
        <div 
        style={{backgroundImage: `url(${slider[0].img.src})`}} 
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
        />
        
      
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
  )
}
