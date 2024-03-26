
const deleteUser=async()=>{

    let data = await fetch("http://localhost:3000/api/users/"+id,{
        method:"delete"
    })
}