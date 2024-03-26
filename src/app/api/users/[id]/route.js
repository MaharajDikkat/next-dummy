import { NextResponse } from "next/server";
import {user} from '@/util/db'

// export function GET(request){
//     return NextResponse.json({name:"Harshit",age:28,city:"Ahmedabad"},{status:200})
// }

//GET Method Api for single Id 

export function GET(request,contant){
    
    // const data = user;

    // const userData =  data.filter((item)=>item.id == contant.params.id)

    const userData =  user.filter((item)=>item.id == contant.params.id)

    return NextResponse.json(userData.length==0?{result:"no data found"}:{result:userData[0]},{status:200})
}

//PUT Method Api for single Id 

export  async function PUT(request, contant){
    let payload = await request.json();
    payload.id = contant.params.id;

    console.log(payload);
  
    if(!payload.id || !payload.name || !payload.age ||!payload.email){
        return NextResponse.json({result:"request data is not valid.",success:false},{status:400})
    }

    return NextResponse.json({result:payload,success:true},{status:200})
}


//DELETE Method Api for single Id 

export function DELETE(request,contant){

    let id = contant.params.id
    if(id){
        return NextResponse.json({result:"user deleted",success:true},{status:200})
    }else{
        return NextResponse.json({result:"Internal eroor ,Please try after sometime",success:false},{status:400})
    }
}