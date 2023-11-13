import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const javaAPIURL = process.cwd() + "/src/app/api/base/db.json";
    const file = await fs.readFile(javaAPIURL, "utf-8");

    const lista = await JSON.parse(file);
    const listaContratos = await lista.seguros_bike;

    let index = await listaContratos.findIndex((contrato)=> contrato.id == params.id);

    if(index != -1) {
      await listaContratos.splice(index, 1);
    }

    fs.writeFile(javaAPIURL, JSON.stringify(lista));

    return NextResponse.json(lista);
  
  } catch(error) {
    return null;
  }

}
