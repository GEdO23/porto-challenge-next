'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import imgIco from "/public/IconeImagem.svg";
import ButtonAdd from "@/components/Button/Add/ButtonAdd";
import ButtonEdit from "@/components/Button/Edit/ButtonEdit";
import ButtonRemove from "@/components/Button/Remove/ButtonRemove";

const SERVER_URL = process.env.SERVER_URL;

export default function SegurosView() {
  const [seguros, setSeguros] = useState([]);

  useEffect(() => {
    fetch(`/api/base/base-contratos/GET/0`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar contratos");
        }
        return response.json();
      })
      .then(data => setSeguros(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/base/base-contratos/DELETE/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setSeguros(seguros.filter(contrato => contrato.id !== id));
      } else {
        throw new Error("Erro ao deletar contrato");
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <main className="segurosview-container">
            {/* Lista de Contratos de Seguro de Bike */}
            <ul className="segurosview-list">
                {/* Verificando se há Contratos 
                Se houver, exibir todos, se não, exibir mensagem */}
                {seguros.length > 0 ? seguros.map((contrato)=> (
                <li key={contrato.id} className="segurosview-list-item">
                    {/* Dados da Bike */}
                    <div className="segurosview-list-item-dados">
                        {/* Exibindo imagem da Bike ao usuário 
                        Caso não tenha sido enviada uma imagem, será exibida a imagem padrão */}
                        <Image className="rounded-lg"
                        width="100" height="50"
                        src={contrato.img ? contrato.img : imgIco} alt="Foto da Bike" 
                        />

                        {/* Marca, modelo, número de série, data da compra, valor da compra e nota fiscal */}
                        <div className="segurosview-list-item-dados-text">
                            <p>{contrato.marca} - {contrato.modelo} - {contrato.numeroSerie}</p>
                            <p>{contrato.dataCompra} - R${(Math.round(contrato.precoCompra * 100) / 100).toFixed(2)}</p>
                            <p className="text-slate-600">{contrato.notaFiscal}</p>
                        </div>
                    </div>

                    {/* Botões de manipulação de Contrato (Edit, Delete) */}
                    <div className="segurosview-list-item-buttons">
                        {/* Caso seja pressionado o botão componente de edição,
                        o usuário será redirecionado para uma página de edição formulário do contrato selecionado */}
                        <button>
                            <Link href={`http://localhost:3000/seguros/edit/${contrato.id}`}>
                                <ButtonEdit />
                            </Link>

                        </button>
                        {/* Caso seja pressionado o botão componente de remoção,
                        chamar função para lidar com o cancelamento do contrato selecionado */}
                        <button onClick={() => handleDelete(contrato.id)} >
                            <ButtonRemove/>
                        </button>
                    </div>
                </li>
                ))
                : (
                <>
                {/* Mensagem exibida, caso usuário ainda não tenha contratos */}
                <li className="w-full text-center">Nenhum contrato encontrado em sua conta...</li>
                <li className="w-full text-center">Adcionar novo contrato:</li>
                </>
                )}
            </ul>

            {/* Botão componente único para contratar mais um seguro de bike */}
            <div className="segurosview-addbutton-container">
                {/* Caso seja pressionado o botão componente de adição,
                o usuário será redirecionado a uma página formulário de contratação de seguro de bike */}
                <Link href="http://localhost:3000/seguros/add">
                    <ButtonAdd />
                </Link>
            </div>
        </main>
    );
}
