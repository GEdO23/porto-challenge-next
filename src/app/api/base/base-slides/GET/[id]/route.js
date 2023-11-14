import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const slidesDBURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(slidesDBURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaSlides = await lista.slides;

  const id = params.id;

  if (id > 0 && id <= listaSlides.length) {
    return await NextResponse.json(
      listaSlides.find((slide) => slide.id == id)
    );
  } else {
    return id == 0
      ? await NextResponse.json(listaSlides)
      : NextResponse.redirect("http://localhost:3000/error");
  }
}
