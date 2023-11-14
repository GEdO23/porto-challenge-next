import imgLogo from "/public/LogoPorto.svg";
import imgMenu from "/public/IconeMenu.svg";
import imgPerfil from "/public/IconePerfil.svg";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <header id="cabecalho">
            <div className="flex items-center w-3/5 justify-between">
                <Link href={'http://localhost:3000'}>
                    <Image
                        src={imgLogo}
                        alt="Menu"
                        width="100"
                        height="25"
                    />
                </Link>
                <Link href={'http://localhost:3000/seguros'}>Seguros</Link>
                <Link href={'http://localhost:3000/gamificacao'}>Gamificação</Link>
                <Link href={'http://localhost:3000/team'}>Equipe</Link>

            </div>
            <Image
                src={imgPerfil}
                alt="Menu"
                width="35"
                height="35"
            />
        </header>
    )
}
