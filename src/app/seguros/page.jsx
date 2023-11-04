import Image from "next/image";
import imgIco from "/public/IconeImagem.svg";

export default async function SegurosView() {

    let seguros;
    try {
        const resposta = await fetch("http://localhost:3000/api/base/base-contratos");
        const contratos = await resposta.json(); 
        seguros = await contratos.seguros_bike;
    } catch(error) {
        console.log(error);
    }

    return (
        <div className="flex flex-col mx-auto my-0 w-max">
            <div>
                <ul className="mx-auto my-0 w-max">
                {seguros.map((contrato)=> (
                    <li key={contrato.id} className="flex items-center max-w-screen-xl justify-between mb-10 gap-24">
                        <div className="flex gap-5">
                            <Image
                            src={contrato.img_src ? contrato.img_src : imgIco}
                            alt="Foto da Bike"
                            width="75"
                            height="50"
                            />
            
                            <div className="flex flex-col gap-2">
                                <p className="texto texto-bold">{contrato.marca} - {contrato.modelo} - {contrato.numero_serie}</p>
                                <p className="texto">{contrato.data_compra} - R$ {contrato.preco_compra}</p>
                                <p className="texto">{contrato.nota_fiscal}</p>
                            </div>
                        </div>
            
                        <div className="flex gap-5">
                            <button className="btn btn-blue">Atualizar</button>
                            <button className="btn btn-red">Cancelar</button>
            
                        </div>

                    </li>
                ))}
                </ul>

            </div>
            <div>
                <button className="btn btn-blue rounded-full text-2xl">+</button>

            </div>
        </div>
    )
}
