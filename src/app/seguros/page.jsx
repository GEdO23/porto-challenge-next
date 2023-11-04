import Image from "next/image";
import imgIco from "/public/IconeImagem.svg";

export default async function SegurosView() {

    const resposta = await fetch("http://localhost:3000/api/base/base-contratos");
    const dados_json = await resposta.json(); 
    const seguros = await dados_json.seguros_bike;

    return (
        <div className="flex flex-col mx-auto my-0 w-max" id="main">
            <div>
                <ul className="mx-auto my-0 w-max">
                    {seguros.map((contrato)=> (
                        // <li key={contrato.id} className="flex items-center max-w-screen-xl justify-between mb-10 gap-24">
                        //     <div className="flex gap-5">
                        //         <Image className="rounded-lg" width="100" height="50"
                        //         src={contrato.img} alt="Foto da Bike" />
                
                        //         <div className="flex flex-col gap-2">
                        //             <p className="text-black">{contrato.marca} - {contrato.modelo} - {contrato.numero_serie}</p>
                        //             <p className="text-slate-600">{contrato.data_compra} - R$ {contrato.preco_compra}</p>
                        //             <p className="text-slate-600">{contrato.nota_fiscal}</p>
                        //         </div>
                        //     </div>

                        //     <div className="flex gap-5">
                        //         <button className="btn btn-blue">Atualizar</button>
                        //         <button className="btn btn-red">Cancelar</button>
                
                        //     </div>

                        // </li>
                        <li key={contrato.id} className="flex items-center max-w-screen-xl justify-between mb-10 gap-24">
                            <div className="flex gap-5">
                                <figure>
                                    <Image className="rounded-lg" width="100" height="50"
                                    src={contrato.img} alt="Foto da Bike" />
                                    <figcaption>{contrato.data_compra}ee - <span>R${contrato.preco_compra}</span></figcaption>
                                </figure>
                
                                <div className="flex flex-col gap-2">
                                    <p className="text-black">{contrato.marca} - {contrato.modelo} - {contrato.numero_serie}</p>
                                    <p className="text-slate-600">{contrato.nota_fiscal}</p>
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
