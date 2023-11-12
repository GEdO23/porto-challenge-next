import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function POST(request,response) {
    try {
        // Recepcionar os dados que serão inseridos em nossa base json
        const userRequest = await request.json();
    
        // Recuperando o arquivo JSON para inserir o novo objeto nele:
        const caminhoDB = process.cwd() + "/src/app/api/base/db.json";
        const file = await fs.readFile(caminhoDB, 'utf8');
    
        // Realizando o parse para deixar o arquivo no mesmo tipo de objeto que chegou no request:
        const lista = await JSON.parse(file);
        const listaSeguros = await lista.seguros_bike;
    
        // Pegando o último ID da lista de usuários:
        const newId = listaSeguros[listaSeguros.length - 1].id + 1;
    
        // Inserindo o id no Objeto do Request:
        userRequest.id = newId;
    
        // Inserindo o Objeto do request no arquivo alterado:
        listaSeguros.push(userRequest);
    
        // Inserindo a lista no arquivo físico JSON:
        fs.writeFile(caminhoDB, JSON.stringify(lista));
    
        return NextResponse.json(userRequest);

    } catch (error) {
        return null;
    }
}