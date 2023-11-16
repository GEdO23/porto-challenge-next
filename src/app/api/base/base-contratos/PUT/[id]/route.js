import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  // const res = await fetch(`http://localhost:8080/portoapi/webapi/bicicletas`);
  // const data = await res.json();

  // const id = await params.id;

  // if (id > 0 && id <= data.length) {
  //   return await NextResponse.json(data.find((contrato) => contrato.id == id));
  // } else {
  //   return id == 0
  //     ? await NextResponse.json(data)
  //     : NextResponse.redirect("http://localhost:3000/error");
  // }
  
  try {
    const userRequest = await request.json();

    const file = await fetch(`http://localhost:8080/portoapi/webapi/bicicletas`);

    const lista = await JSON.parse(file);
    const listaContratos = await lista.seguros_bike;

    let index = await listaContratos.findIndex((contrato)=> contrato.id == params.id);

    if(index != -1) {
      listaContratos[index] = await userRequest;
    }

    await fs.writeFile(javaAPIURL, JSON.stringify(lista));

    return NextResponse.json(lista);
  
  } catch(error) {
    return null;
  }
}
