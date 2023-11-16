import { NextResponse } from "next/server";

export async function POST(request, response) {
  const userRequest = await request.json();
  const URL = `http://localhost:8080/portoapi/webapi/bicicletas`;

  const submitContrato = async ()=> {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(userRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  const data = await submitContrato();

  return NextResponse.json(data);
}
