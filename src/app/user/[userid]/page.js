import Link from "next/link";

async function getUser(id){
    // console.log(id)
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    // console.log("Api data --> ",data)
    return data.result;
}

export default async function Page({params}){

    // console.log(params);

    const user = await getUser(params.userid)

    // console.log(user)

    return(

        <div>
            <h1>
              User Details
            </h1>

            <h4>Name : {user.name}</h4>
            <h4>Age : {user.age}</h4>
            <h4>Email : {user.email}</h4>

            <Link href="/user">Go Back</Link>
        </div>
    )
}