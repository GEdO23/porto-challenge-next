import Link from "next/link";

export default function Home() {
  return (
    <>
    <main id='main' >
      <h1>HOME</h1>
      <h2>Pagina Principal</h2>
      <Link href="/seguros">Contratos Seguro de Bike</Link>
    </main>
    </>
  )
}
