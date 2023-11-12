import { NextResponse } from "next/server";
import {promises as fs} from "fs";

export async function POST(request, {params}) {

    // Obtendo o request json do usuario
    const userRequest = await request.json();
    
    // Obtendo a URL da API de Java
    const apiURL = 'http://localhost:8080/portoapi/webapi/bicicletas';

    // Coletando o arquivo
    const file = await fs.readFile(apiURL, 'utf-8');

    // Extrair a lista de bicicletas do arquivo json
    const listaBicicletas = await JSON.parse(file);




    return NextResponse.json();
}