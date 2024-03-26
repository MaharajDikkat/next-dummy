import { NextResponse } from "next/server";
import {user} from '@/util/db'

// export function GET(request){
//     return NextResponse.json({name:"Harshit",age:28,city:"Ahmedabad"},{status:200})
// }

export function GET(){
    const data = user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    let payload =  await request.json();
    return NextResponse.json({result:"hello"})
}