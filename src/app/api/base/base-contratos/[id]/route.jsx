import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
  // Coletando caminho do banco de dados
  const caminhoBd = process.cwd() + "/src/app/api/base/db.json";

  // Armazenando arquivo
  const file = await fs.readFile(caminhoBd, 'utf8');

  // Extraindo a lista de usuários do arquivo JSON:
  const lista = await JSON.parse(file).seguros_bike;

  const id = params.id;
    
  if(id > 0 && id <= lista.length) {
    return NextResponse.json(lista.find((user)=> user.id == id));
  } else {
    return id == 0 ? 
    NextResponse.json(lista) : 
    NextResponse.redirect("http://localhost:3000/error")
  }
}