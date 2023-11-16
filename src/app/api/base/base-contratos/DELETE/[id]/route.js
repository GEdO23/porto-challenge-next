import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id; // O ID da bicicleta é passado como um parâmetro de rota
  const URL = `http://localhost:8080/portoapi/webapi/bicicletas/${id}`;

  const deleteContrato = async ()=> {
    const response = await fetch(URL, {
      method: 'DELETE',
    });
    return response.ok; // Retorna true se a resposta for bem-sucedida, false caso contrário
  }

  const success = await deleteContrato();

  return NextResponse.json({ success }); 
}
