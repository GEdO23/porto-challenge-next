import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const userRequest = await request.json();
  const id = params.id; // O ID da bicicleta é passado como um parâmetro de rota
  const URL = `http://localhost:8080/portoapi/webapi/bicicletas/${id}`;

  const updateContrato = async ()=> {
    const response = await fetch(URL, {
      method: 'PUT',
      body: JSON.stringify(userRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.ok; // Retorna true se a resposta for bem-sucedida, false caso contrário
  }

  const success = await updateContrato();

  return NextResponse.json({ success }); 
}
