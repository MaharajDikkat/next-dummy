import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {
//   await mongoose.connect(connectionSrt);

//  // const data = await Product.find();

//   console.log(data);

//   return NextResponse.json({ result: data });
// }


export async function GET(){
  let data  = [];

  try {

    await mongoose.connect(connectionSrt);
    data = await Product.find(); //its return a promise so we have to use await

  } catch (error) {
     data = {result:"error"}
  }

  return NextResponse.json({result:data})
}




export async function POST(request) {
  await mongoose.connect(connectionSrt);

  // // const data = await Product.find();  find all

//   let proddut = new Product({
//     name: "Note 10",
//     price: "30000",
//     color: "red",
//     company: "samsung",
//     category: "mobile",
//   });

const payload = await request.json();
let product  = new Product(payload)

  const result = await product.save();
  return NextResponse.json({ result, success: true });
  
}
