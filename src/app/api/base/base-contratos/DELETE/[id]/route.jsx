import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const javaAPIURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(javaAPIURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaContratos = await lista.seguros_bike;

  const id = params.id;

  if (id > 0 && id <= listaContratos.length) {
    return NextResponse.json(
      listaContratos.find((contrato) => contrato.id == id)
    );
  } else {
    return id == 0
      ? NextResponse.json(listaContratos)
      : NextResponse.redirect("http://localhost:3000/error");
  }
}
