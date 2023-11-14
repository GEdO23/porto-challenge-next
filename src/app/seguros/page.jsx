"use client";

import Image from "next/image";
import imgIco from "/public/IconeImagem.svg";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SegurosView() {
    
    const resposta = await fetch("http://localhost:3000/api/base/base-contratos/GET/0");
    const seguros = await resposta.json();

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/base/base-contratos/DELETE/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <main className="contratos-container">
            <ul className="contratos-lista">
                {
                seguros.length > 0 ? 
                seguros.map((contrato) => (
                    <li key={contrato.id} className="contrato-item">
                        <div className="item-info">
                            <Image className="item-imagem" width="100" height="50" src={contrato.img ? contrato.img : imgIco} alt="Foto da Bike" />
                            <div className="text-container">
                                <p>{contrato.marca} - {contrato.modelo} - {contrato.numero_serie}</p>
                                <p>{contrato.data_compra} - R$ {(Math.round(contrato.preco_compra * 100) / 100).toFixed(2)}</p>
                                <p className="light-text">{contrato.nota_fiscal}</p>
                            </div>
                        </div>

                        <div className="button-container">
                            <Link href={`http://localhost:3000/seguros/edit/${contrato.id}`}>
                                <button type="button" className="btn btn-blue">Atualizar</button>
                            
                            </Link>
                            <button type="button" className="btn btn-red" onClick={()=> handleDelete(contrato.id)}>Cancelar</button>
                        </div>
                    </li>
                )) :
                (
                    <>
                        <li className="w-full text-center">Nenhum contrato adcionado ainda...</li>
                        <li className="w-full text-center">Adcionar novo contrato:</li>
                    </>
                )}
            </ul>
            <div className="add-button-container">
                <Link href="http://localhost:3000/seguros/add">
                    <button className="btn btn-blue rounded-full text-2xl">+</button>
                </Link>
            </div>
        </main>
    );
}
