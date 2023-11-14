import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(request, response) {

  const userRequest = await request.json();

  const javaAPIURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(javaAPIURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaContratos = await lista.seguros_bike;

  let newID = 1;

  if(listaContratos.length > 0) {
    newID = await listaContratos[listaContratos.length - 1].id + 1;
  }
  
  userRequest.id = await newID;

  await listaContratos.push(userRequest);

  await fs.writeFile(javaAPIURL, JSON.stringify(lista));

  return NextResponse.json(userRequest);
}
