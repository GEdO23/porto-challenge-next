import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const resposta = await fetch("http://localhost:3000/api/base/base-slider/GET/0");
  const slider = await resposta.json();

  return (
    <>
    <main>
      <h1 className=" text-4xl">HOME</h1>
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
      </ul>
      
    </main>
    </>
  )
}
