export default async function TeamView() {

    // Solicitando resposta fetch de GET-ALL de base-equipe.
    const respostaGET = await fetch("http://localhost:3000/api/base/base-equipe/GET/0");
    
    // Transformando a resposta fetch em um json que poderá ser utilizado na página.
    const participantes = await respostaGET.json();


    return (
        <main className="team-container">
            <div className="team-subcontainer">
                <h1 className="team-tit">EQUIPE OM CORP.</h1>

                <div className="team-boxcontainer">
                    <ul className="team-boxcontainer-list">
                        {await participantes ? participantes.map((membro)=> (
                            <li key={membro.id} className="team-boxcontainer-list-item">
                                <p className="team-boxcontainer-list-item-rm">{membro.rm}</p>
                                <h2 className="team-boxcontainer-list-item-nome">{membro.nome}</h2>
                            </li>   
                        )) : <p>Carregando...</p>}
                    </ul>

                </div>
            </div>
        </main>
    )
}
