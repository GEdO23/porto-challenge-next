export default function TeamView() {

    const participantes = [
        {
            "id": 1,
            "rm": "RM551575",
            "nome": "André Sant'ana"
        },
        {
            "id": 2,
            "rm": "RM99632",
            "nome": "Gabriel Eringer de Oliveira"
        },
        {
            "id": 3,
            "rm": "RM99697",
            "nome": "Matheus Augusto Leite"
        },
        {
            "id": 4,
            "rm": "RM98251",
            "nome": "Marcelo Hespanhol Dias"
        },
        {
            "id": 5,
            "rm": "RM551428",
            "nome": "Eduardo Tatsuo"
        },
        {
            "id": 6,
            "rm": "RM551616",
            "nome": "Yago Marques"
        }
    ];


    return (
        <main className="flex justify-center bg-[#EFF4F0] pt-[80px] ">
            <div>
                <h1 className=" text-black text-[20px] font-bold mb-[20px]">EQUIPE OM CORP.</h1>

            <div>
                <ul className="
                flex flex-col p-[50px] pt-[30px] gap-[25px]
                rounded-[5px] bg-white min-w-[360px]
                ">
                    {participantes.map((membro)=> (
                        <li key={membro.id} className="flex flex-col items-start gap-[10px] self-stretch">
                            <p className="self-stretch text-black text-[12.5px] opacity-80">{membro.rm}</p>
                            <h2 className="self-stretch text-black text-[16px] font-bold">{membro.nome}</h2>
                        </li>   
                    ))}
                </ul>

            </div>
            </div>






        </main>
    )
}
