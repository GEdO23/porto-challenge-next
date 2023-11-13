import imgLogo from "/public/LogoPorto.svg";
import imgMenu from "/public/IconeMenu.svg";
import imgPerfil from "/public/IconePerfil.svg";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {

    let i = false;

    if(i) {
        return (
            <header id="cabecalho">
                <Link href={'http://localhost:3000'}>
                    <Image
                        src={imgLogo}
                        alt="Menu"
                        width="100"
                        height="25"
                    />    
                </Link>
                <Image
                    src={imgPerfil}
                    alt="Menu"
                    width="35"
                    height="35"
                />
            </header>
        )
    }
    return (
        <header id="cabecalho">
            <Image
                src={imgMenu}
                alt="Menu"
                width="25"
                height="25"
            />
            <Link href={'http://localhost:3000'}>
                <Image
                    src={imgLogo}
                    alt="Menu"
                    width="100"
                    height="25"
                />    
            </Link>
            <Image
                src={imgPerfil}
                alt="Menu"
                width="35"
                height="35"
            />
        </header>
    )
}
