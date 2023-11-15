import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(request, response) {

  const userRequest = await request.json();

  const teamDBURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(teamDBURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaEquipe = await lista.equipeOMCORP;

  let newID = 1;

  if(listaEquipe.length > 0) {
    newID = await listaEquipe[listaEquipe.length - 1].id + 1;
  }
  
  userRequest.id = await newID;

  await listaEquipe.push(userRequest);

  await fs.writeFile(teamDBURL, JSON.stringify(lista));

  return NextResponse.json(userRequest);
}
