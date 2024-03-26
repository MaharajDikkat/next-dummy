"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState();

  const onSubmit = async (e) => {

    e.preventDefault(); // stop relosding page.
    // console.log(file);

    const imgData = new FormData();  // here we are create a FormData Object
    imgData.set('file',file) // here we are set only file to imgData

    let result = await fetch("api/upload",{
        method:"POST",
        body:imgData
    })  // here we are calling Podt upload image upload API.

    result = await result.json(); // here we are converting result into json
    console.log(result);

    if(result.success){
        alert("Image Uploaded Successfully.");
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />

        <button type="submit">Upload Image</button>
      </form>

      <br />

      <Link href="/">Go Back to Home</Link>
    </div>
  );
}
