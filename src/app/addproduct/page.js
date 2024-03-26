
"use client"
import { useState } from "react"
import "./page.css"
import Link from "next/link";
export default function Page(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");


    const addProduct= async()=>{

        console.log(name,price,color,company,category);

        let result =  await fetch("http://localhost:3000/api/products",{
            method:"Post",
            body:JSON.stringify({name,price,color,company,category})
        });

        result = await result.json();

        if(result.success){

            alert("New Product Added.")
        }

     

    }

    function reset(){
        setName("");
        setColor("");
        setPrice("");
        setCategory("");
        setCompany("");
    }


    return (

        <div className="add-product">
            <h1>
                AddProduct
            </h1>

            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter Produt Name eg.Nokia"/>
            <input className="input" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Produt Price "/>
            <input className="input" type="text" value={color} onChange={(e)=>setColor(e.target.value)}  placeholder="Enter Produt Color "/>
            <input className="input" type="text" value={company} onChange={(e)=>setCompany(e.target.value)}  placeholder="Enter Produt Company"/>
            <input className="input" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Produt Category "/>

            <button className="btn"  onClick={addProduct}>Add Product</button>
            <button className="btn" onClick={reset}>Clear</button>
            <button className="btn" ><Link href="/products">Go to Products</Link></button>
        </div>
    )
}