// pages/contracts/edit/[id].js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditContract({ params }) {
  const navigation = useRouter();
  const id = params.id;

  const [contrato, setContrato] = useState({
    marca: "",
    modelo: "",
    numero_serie: "",
    data_compra: "",
    preco_compra: "0",
    nota_fiscal: "",
    img: "",
  });

  useEffect(() => {
    const fetchContrato = async () => {
      try {
        const resposta = await fetch(`/api/base/base-contratos/GET/${id}`);
        console.log(`Obtendo resposta de fetch com o id ${id}`)
        const data = await resposta.json();
        console.log(`Resposta JSON: ${data}`)
        await setContrato(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchContrato();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContrato((contrato) => ({ ...contrato, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/base/base-contratos/PUT/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contrato),
        }
      );

      setTimeout(() => {
        navigation.push("/seguros");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className="text-center">Atualizar Contrato</h1>
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
                Preço: R$
                <input
                  type="number"
                  name="preco_compra"
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
              <button type="submit">ATUALIZAR CONTRATO</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
