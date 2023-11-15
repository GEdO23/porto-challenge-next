import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(request, response) {

  const userRequest = await request.json();

  const slidesDBURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(slidesDBURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaSlides = await lista.slides;

  let newID = 1;

  if(listaSlides.length > 0) {
    newID = await listaSlides[listaSlides.length - 1].id + 1;
  }
  
  userRequest.id = await newID;

  await listaSlides.push(userRequest);

  await fs.writeFile(slidesDBURL, JSON.stringify(lista));

  return NextResponse.json(userRequest);
}
