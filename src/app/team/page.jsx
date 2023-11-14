export default async function TeamView() {

    // Solicitando resposta fetch de GET-ALL de base-equipe.
    const respostaGET = await fetch("http://localhost:3000/api/base/base-equipe/GET/0");
    
    // Transformando a resposta fetch em um json que poderá ser utilizado na página.
    const participantes = await respostaGET.json();


    return (
        <main className="flex justify-center bg-[#EFF4F0] pt-[80px] ">
            <div>
                <h1 className=" text-black text-[20px] font-bold mb-[20px]">EQUIPE OM CORP.</h1>

                <div>
                    <ul className="flex flex-col p-[50px] pt-[30px] gap-[25px] rounded-[5px] bg-white min-w-[360px]">
                        {await participantes ? participantes.map((membro)=> (
                            <li key={membro.id} className="flex flex-col items-start gap-[10px] self-stretch">
                                <p className="self-stretch text-black text-[12.5px] opacity-80">{membro.rm}</p>
                                <h2 className="self-stretch text-black text-[16px] font-bold">{membro.nome}</h2>
                            </li>   
                        )) : <p>Carregando...</p>}
                    </ul>

                </div>
            </div>






        </main>
    )
}
