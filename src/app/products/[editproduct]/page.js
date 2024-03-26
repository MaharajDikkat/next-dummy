
"use client"
import { useEffect, useState } from "react"
import "./page.css"
import Link from "next/link";
export default function Page(props){

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");



    useEffect(() =>{

        getProductDetail();
       

    },[])

    const getProductDetail= async()=>{

        let productData = await fetch("http://localhost:3000/api/products/"+props.params.editproduct)

        productData = await productData.json();

        if(productData.success){

        let  result = productData.result;

        setName(result.name);
        setPrice(result.price)
        setColor(result.color)
        setCompany(result.company)
        setCategory(result.category)
        }
        console.log(productData);

    }




    const updateProduct= async()=>{

        console.log(name,price,color,company,category);

        let result =  await fetch("http://localhost:3000/api/products/"+props.params.editproduct,{
            method:"Put",
            body:JSON.stringify({name,price,color,company,category})
        });

        result = await result.json();

        if(result.success){

            alert("Product Update Successfully.")
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
                Edit Products
            </h1>

            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter Produt Name eg.Nokia"/>
            <input className="input" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Produt Price "/>
            <input className="input" type="text" value={color} onChange={(e)=>setColor(e.target.value)}  placeholder="Enter Produt Color "/>
            <input className="input" type="text" value={company} onChange={(e)=>setCompany(e.target.value)}  placeholder="Enter Produt Company"/>
            <input className="input" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Produt Category "/>

            <button className="btn"  onClick={updateProduct}>Edit Product</button>
            <button className="btn" onClick={reset}>Clear</button>
            <button className="btn" ><Link href="/products">Go to Products</Link></button>
        </div>
    )
}