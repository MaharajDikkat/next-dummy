"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./page.css";
import { PUT } from "@/app/api/users/[id]/route";

export default function Page(params) {
//   console.log(params.params.userid);

  let id = params.params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{
    // console.log(id);
    getUserDetails()
  },[])


  const getUserDetails= async () =>{
    let data = await fetch("http://localhost:3000/api/users/"+id)
    data = await data.json();
    // console.log("Get Dtat By id =>",data.result);

    setName(data.result.name)
    setAge(data.result.age)
    setEmail(data.result.email)

  }

  const updateUser= async()=>{
    // console.log(name,age,email);

    let result = await fetch("http://localhost:3000/api/users/"+id,{
        method:"PUT",
        body:JSON.stringify({name,age,email})

    })

    result = await result.json();

    console.log(result);

  }


  return (
    <div className="add-user">
      <h1>Update User Details</h1>

      <input
        className="input-field"
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn"> <Link href={`/user`}>Go Back</Link></button>
      <button className="btn" onClick={updateUser}>Update User</button>

    </div>
  );
}
