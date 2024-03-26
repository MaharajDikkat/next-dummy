import Link from "next/link";
import "./page.css"
import DeleteUser from "@/util/delelteUser";

async function getUser(){
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json();
    return data;
}

export default async function Page(){

    const users = await getUser();

    return(
        <div>
            <h1>
                User page.
            </h1>
          
           {
            users.map( (item)=>(
                <div className="user-item">
                    
                   <span> <Link href={`user/${item.id}`}>{item.name}</Link></span>

                    <span> <Link href={`user/${item.id}/update`}>Edit</Link></span>
                    <DeleteUser id={item.id}/>
                    

                </div>
            ))
           }
        </div>
    )
}