import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const teamDBURL = process.cwd() + "/src/app/api/base/db.json";
    const file = await fs.readFile(teamDBURL, "utf-8");

    const lista = await JSON.parse(file);
    const listaEquipe = await lista.equipeOMCORP;

    let index = await listaEquipe.findIndex((membro)=> membro.id == params.id);

    if(index != -1) {
      await listaEquipe.splice(index, 1);
    }

    fs.writeFile(teamDBURL, JSON.stringify(lista));

    return NextResponse.json(lista);
  
  } catch(error) {
    return null;
  }

}
