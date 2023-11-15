import imgLogo from "/public/LogoPorto.svg";
import imgPerfil from "/public/IconePerfil.svg";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <header className="cabecalho-container">
            <div className="cabecalho-links">
                <Link href={'http://127.0.0.1:3000'}>
                    <Image
                        src={imgLogo}
                        alt="Porto"
                        width="100"
                        height="25"
                    />
                </Link>
                <Link href={'http://127.0.0.1:3000/seguros'}>Seguros</Link>
                <Link href={'http://127.0.0.1:3000/gamificacao'}>Gamificação</Link>
                <Link href={'http://127.0.0.1:3000/team'}>Equipe</Link>

            </div>
            <Image
                src={imgPerfil}
                alt="Usuário"
                width="35"
                height="35"
            />
        </header>
    )
}
