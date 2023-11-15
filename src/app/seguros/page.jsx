// Importando Tags utilizadas na página
import Image from "next/image";
import Link from "next/link";

// Importando Imagem padrão da bike
import imgIco from "/public/IconeImagem.svg";

// Importando componentes
import ButtonAdd from "@/components/Button/Add/ButtonAdd";
import ButtonEdit from "@/components/Button/Edit/ButtonEdit";
import ButtonRemove from "@/components/Button/Remove/ButtonRemove";

// Página assincrona de visualização de seguros de bike
export default async function SegurosView() {

    // Solicitando resposta fetch de GET-ALL de base-contratos.
    const respostaGET = await fetch("http://localhost:3000/api/base/base-contratos/GET/0");
    
    // Transformando a resposta fetch em um json que poderá ser utilizado na página.
    const seguros = await respostaGET.json();

    // Função para lidar com o cancelamento de contratos
    const handleDelete = async (id) => {
        try {
            // Solicitando a remoção do seguro, cujo ID é o mesmo que o ID chamado na função
            const respostaDEL = await fetch(`http://localhost:3000/api/base/base-contratos/DELETE/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="segurosview-container">
            {/* Lista de Contratos de Seguro de Bike */}
            <ul className="segurosview-list">
                {/* Verificando se há Contratos 
                Se houver, exibir todos, se não, exibir mensagem */}
                {await seguros.length > 0 && await seguros? 
                (await seguros.map((contrato) => (
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
                            <p>{contrato.marca} - {contrato.modelo} - {contrato.numero_serie}</p>
                            <p>{contrato.data_compra} - R${(Math.round(contrato.preco_compra * 100) / 100).toFixed(2)}</p>
                            <p className="text-slate-600">{contrato.nota_fiscal}</p>
                        </div>
                    </div>

                    {/* Botões de manipulação de Contrato (Edit, Delete) */}
                    <div className="segurosview-list-item-buttons">
                        {/* Caso seja pressionado o botão componente de edição,
                        o usuário será redirecionado para uma página de edição formulário do contrato selecionado */}
                        <Link href={`http://localhost:3000/seguros/edit/${contrato.id}`}>
                            <ButtonEdit />
                        </Link>
                        {/* Caso seja pressionado o botão componente de remoção,
                        chamar função para lidar com o cancelamento do contrato selecionado */}
                        <ButtonRemove onClick={() => handleDelete(contrato.id)} />
                    </div>
                </li>
                ))
                ) : (
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
