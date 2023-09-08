import { useState } from "react"

export default function Counter(){
    const [count , setcount]= useState(0);
    const handleAdd = ()=>{
        const newCount = count +1;
        setcount(newCount)
    }
    const handleReduce = ()=>{
        const newCount = count -1 ;
        setcount(newCount)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>counter : {count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
} 