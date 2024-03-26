"use client"
export default function DeleteUser(props){
    const userid = props.id;
    console.log(userid)
    const deleteUser= async()=>{
        let result = await fetch("http://localhost:3000/api/users/"+userid,{
            method:"delete"
        })

        result = await result.json();
        if(result.success){
            alert("User is deleted.")
        }
    }
    return<button onClick={deleteUser}>Delete</button>
}