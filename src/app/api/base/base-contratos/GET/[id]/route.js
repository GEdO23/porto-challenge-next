import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const res = await fetch(`http://localhost:8080/portoapi/webapi/bicicletas`);
  const data = await res.json();

  const id = await params.id;

  if (id > 0 && id <= data.length) {
    return await NextResponse.json(data.find((contrato) => contrato.id == id));
  } else {
    return id == 0
      ? await NextResponse.json(data)
      : NextResponse.redirect("http://localhost:3000/error");
  }
}
