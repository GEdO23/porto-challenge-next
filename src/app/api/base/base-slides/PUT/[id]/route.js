import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const userRequest = await request.json();

    const slidesDBURL = process.cwd() + "/src/app/api/base/db.json";
    const file = await fs.readFile(slidesDBURL, "utf-8");

    const lista = await JSON.parse(file);
    const listaSlides = await lista.slides;

    let index = await listaSlides.findIndex((slide)=> slide.id == params.id);

    if(index != -1) {
      listaSlides[index] = await userRequest;
    }

    await fs.writeFile(slidesDBURL, JSON.stringify(lista));

    return NextResponse.json(lista);
  
  } catch(error) {
    return null;
  }
}
