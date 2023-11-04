import imgLogo from "/public/LogoPorto.svg";
import imgMenu from "/public/IconeMenu.svg";
import imgPerfil from "/public/IconePerfil.svg";
import Image from "next/image";

export default function Cabecalho() {

    let i = false;

    if(i) {
        return (
            <header id="cabecalho">
                <button>
                    <Image
                        src={imgLogo}
                        alt="Menu"
                        width="100"
                        height="25"
                    />    
                </button>
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
            <Image
                src={imgLogo}
                alt="Menu"
                width="100"
                height="25"
            />
            <Image
                src={imgPerfil}
                alt="Menu"
                width="35"
                height="35"
            />
        </header>
    )
}
