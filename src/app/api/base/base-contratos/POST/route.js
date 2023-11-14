import { promises as fs } from "fs";
import { NextResponse } from "next/server";


//     {
//       "id": 3,
//       "marca": "Specialized",
//       "modelo": "Rockhopper Expert",
//       "numero_serie": "S456789123",
//       "data_compra": "05/03/2023",
//       "preco_compra": 5999,
//       "nota_fiscal": "nota_fiscal_3.pdf",
//       "img": ""
//     },
//     {
//       "id": 4,
//       "marca": "Trek",
//       "modelo": "Marlin 7",
//       "numero_serie": "T123456789",
//       "data_compra": "01/04/2023",
//       "preco_compra": 4499,
//       "nota_fiscal": "nota_fiscal_4.pdf",
//       "img": ""
//     },
//     {
//       "id": 5,
//       "marca": "Cannondale",
//       "modelo": "Trail SL 1",
//       "numero_serie": "C987654321",
//       "data_compra": "30/04/2023",
//       "preco_compra": 7999,
//       "nota_fiscal": "nota_fiscal_5.pdf",
//       "img": ""
//     },
//     {
//       "id": 6,
//       "marca": "Giant",
//       "modelo": "Talon 1",
//       "numero_serie": "G456789123",
//       "data_compra": "15/05/2023",
//       "preco_compra": 5499,
//       "nota_fiscal": "nota_fiscal_6.pdf",
//       "img": ""
//     },
//     {
//       "id": 7,
//       "marca": "Fuji",
//       "modelo": "Pulse 1",
//       "numero_serie": "F123456789",
//       "data_compra": "01/06/2023",
//       "preco_compra": 5999,
//       "nota_fiscal": "nota_fiscal_7.pdf",
//       "img": ""
//     },
//     {
//       "id": 8,
//       "marca": "Scott",
//       "modelo": "Outlander XTR",
//       "numero_serie": "SC123456789",
//       "data_compra": "01/07/2023",
//       "preco_compra": 5499,
//       "nota_fiscal": "nota_fiscal_8.pdf",
//       "img": ""
//     },
//     {
//       "id": 9,
//       "marca": "Specialized",
//       "modelo": "Liv Pro FX 2",
//       "numero_serie": "SP123456789",
//       "data_compra": "01/08/2023",
//       "preco_compra": 5999,
//       "nota_fiscal": "nota_fiscal_9.pdf",
//       "img": ""
//     },
//     {
//       "id": 10,
//       "marca": "Santa Cruz",
//       "modelo": "Supernova 3",
//       "numero_serie": "SN123456789",
//       "data_compra": "01/09/2023",
//       "preco_compra": 5499,
//       "nota_fiscal": "nota_fiscal_10.pdf",
//       "img": ""
//     }

export async function POST(request, response) {

  const userRequest = await request.json();

  const javaAPIURL = process.cwd() + "/src/app/api/base/db.json";
  const file = await fs.readFile(javaAPIURL, "utf-8");

  const lista = await JSON.parse(file);
  const listaContratos = await lista.seguros_bike;

  let newID = 1;

  if(listaContratos.length > 0) {
    newID = await listaContratos[listaContratos.length - 1].id + 1;
  }
  
  userRequest.id = await newID;

  await listaContratos.push(userRequest);

  await fs.writeFile(javaAPIURL, JSON.stringify(lista));

  return NextResponse.json(userRequest);
}
