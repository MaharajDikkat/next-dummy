import { NextResponse } from "next/server";

import{writeFile} from 'fs/promises'

export async function POST(request){ //crete Podt method function

   try {
    
    const data = await request.formData(); // take form data from payload
    const file = data.get('file'); // here we take file from data(whole object)

    const byteData = await file.arrayBuffer(); // we have convert image into buffer type (arrayBuffer)
    const buffer = Buffer.from(byteData); // here we gat buffer of byte data
    const path = `./public/${file.name}`; //here we define save file path

    await writeFile(path,buffer); // here we are write buffer file to path  

    return NextResponse.json({"message":"File Uploaded Successfully.",success:true})

   } catch (error) {

    return NextResponse.json({"message": "no image foumd",success:false},{status:400});
    
   }
}