import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(request,contant){

    const productId = contant.params.productId;
    const filter ={_id:productId}
    const payload = await request.json();

    await mongoose.connect(connectionSrt);
    const result =  await Product.findOneAndUpdate(filter,payload)

    return NextResponse.json({result,success:true})

}


export async function GET(request,contant){

    const productId = contant.params.productId;
    const record ={_id:productId}

    await mongoose.connect(connectionSrt);
    const result =  await Product.findById(record)

    return NextResponse.json({result,success:true})

}

export async function DELETE(request,contant){

    const productId = contant.params.productId;
    const record ={_id:productId};

    await mongoose.connect(connectionSrt);
    const result =  await Product.deleteOne(record);

    return NextResponse.json({result,success:true});

}