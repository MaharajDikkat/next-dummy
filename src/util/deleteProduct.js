"use client"

import { useRouter } from "next/navigation";

export default function Delete(props){
    const productId = props.id;
    const router = useRouter();
    // console.log(productId)
    const deleteUser= async()=>{
        let result = await fetch("http://localhost:3000/api/products/"+productId,{
            method:"delete"
        });

        result = await result.json();
        if(result.success){
            alert("Product is deleted.");
            router.push("/products")

        }
    }
    return<button onClick={deleteUser}>Delete</button>
}