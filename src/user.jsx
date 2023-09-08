import { useEffect, useState } from "react"

export default function User(){
   // useState
    const [users , setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    },[])
    return(
        <div>
            <h3> users : {users.length}</h3>
        </div>
    )
}
// declare a state to hold the data
// useEffect with call back and dependency