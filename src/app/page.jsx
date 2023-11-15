import Slider from "@/components/Slider/Slider";

export default async function Home() {
  
  // Solicitando resposta fetch de GET-ALL de base-slides.
  const respostaGET = await fetch("http://localhost:3000/api/base/base-slides/GET/0");
  
  // Transformando a resposta fetch em um json que poderá ser utilizado na página.
  const slides = await respostaGET.json();

  return (
    <div className="pt-14">
      {
        await slides ? <Slider slides={slides} /> : <p>Carregando...</p>
      }

    </div>
  )
}
