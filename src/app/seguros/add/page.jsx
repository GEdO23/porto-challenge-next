import Image from "next/image";
import imgIco from "/public/IconeImagem.svg";

export default function SegurosAdd() {

    return (
        // "id": 1,
        // "marca": "Caloi",
        // "modelo": "Elite Carbon",
        // "numero_serie": "C123456789",
        // "data_compra": "15/01/2023",
        // "preco_compra": 9999.99,
        // "nota_fiscal": "nota_fiscal_1.pdf",
        // "img": ""
        <div id="main">
            <h1 className='text-center'>Cadastro de Seguro</h1>
            <div>
                <form>
                    <div>
                        <div>
                            <label htmlFor="idMarca">
                                Marca:
                                <input type="text" id="idMarca"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idModelo">
                                Modelo:
                                <input type="text" id="idModelo"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idNumserie">
                                Número de Série:
                                <input type="text" id="idNumserie"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idDtCompra">
                                Data da Compra:
                                <input type="date" id="idDtCompra"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idDtPreco">
                                Preço:
                                <input type="number" id="idDtPreco"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idNotafiscal">
                                Nota Fiscal:
                                <input type="file" id="idNotafiscal"/>
                            </label>

                        </div>
                        <div>
                            <label htmlFor="idFotoBike">
                                Foto da Bike:
                                <input type="text" id="idFotoBike"/>
                            </label>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
