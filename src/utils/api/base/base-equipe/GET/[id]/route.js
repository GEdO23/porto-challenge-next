import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const teamDBURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(teamDBURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaEquipe = await lista.equipeOMCORP;

  const id = params.id;

  if (id > 0 && id <= listaEquipe.length) {
    return await NextResponse.json(
      listaEquipe.find((membro) => membro.id == id)
    );
  } else {
    return id == 0
      ? await NextResponse.json(listaEquipe)
      : NextResponse.redirect("http://127.0.0.1:3000/error");
  }
}
