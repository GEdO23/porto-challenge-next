"use client";

import Image from "next/image";
import imgIco from "/public/IconeImagem.svg";
import { useState } from "react";

export default function CadSeguro() {
    const [contrato, setContrato] = useState({
        marca: "",
        modelo: "",
        numero_serie: "",
        data_compra: "",
        preco_compra: "",
        nota_fiscal: "",
        img: "",
    });

    const handleChange = (e)=> {
        const {name, value} = e.target;

        setContrato({...contrato, [name]: value});
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-contratos/POST", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contrato),
            });
        } catch(error) {
            console.log(error);
        }
    }



    return (
        <div id="main">
            <h1 className="text-center">Cadastro de Seguro</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="idMarca">
                                Marca:
                                <input 
                                type="text"
                                name="marca"
                                id="idMarca"
                                placeholder="Digite a marca de sua bike."
                                value={contrato.marca}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idModelo">
                                Modelo:
                                <input 
                                type="text" 
                                name="modelo"
                                id="idModelo"
                                placeholder="Digite o modelo de sua bike."
                                value={contrato.modelo} 
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idNumserie">
                                Número de Série:
                                <input 
                                type="text" 
                                name="numero_serie"
                                id="idNumserie"
                                placeholder="Digite o número de série de sua bike."
                                value={contrato.numero_serie}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idDtCompra">
                                Data da Compra:
                                <input 
                                type="date" 
                                name="data_compra"
                                id="idDtCompra"
                                value={contrato.data_compra}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idDtPreco">
                                Preço:
                                <input 
                                type="number" 
                                name="data_preco"
                                id="idDtPreco"
                                placeholder="Digite o valor da bike em sua compra."
                                value={contrato.preco_compra}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idNotafiscal">
                                Nota Fiscal:
                                <input 
                                type="file" 
                                name="nota_fiscal"
                                id="idNotafiscal"
                                placeholder="Selecione a nota fiscal de sua bike."
                                value={contrato.nota_fiscal}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="idFotoBike">
                                Foto da Bike:
                                <input 
                                type="text" 
                                name="img"
                                id="idFotoBike"
                                placeholder="Informe a URL de uma foto de sua bike."
                                value={contrato.img}
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <button>ADCIONAR CONTRATO</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
