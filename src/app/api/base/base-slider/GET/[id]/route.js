import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const javaAPIURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(javaAPIURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaSlider = await lista.slider;

  const id = params.id;

  if (id > 0 && id <= listaSlider.length) {
    return await NextResponse.json(
        listaSlider.find((contrato) => contrato.id == id)
    );
  } else {
    return id == 0
      ? await NextResponse.json(listaSlider)
      : NextResponse.redirect("http://localhost:3000/error");
  }
}
