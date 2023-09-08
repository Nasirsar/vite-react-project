import { useState } from "react"

export default function Team (){
    const [team ,setTeam]= useState(11)
    const handleAdd = ()=>{
        const newTeam = team + 1 ;
        setTeam(newTeam);
    }
    // const handleRemove = ()=>{
    //     const newTeam = team - 1;
    //     setTeam(newTeam)
    // }
    const handleRemove = ()=>{
        setTeam(team-1)
    }
    const teamStyle ={
        border : '2px solid blue',
        margin : '22px',
        padding: '15 px',
        borderRedius:'20px'
    }
    return (
        <div style={teamStyle}>
              <h2>players : {team} </h2>
              <button onClick={handleAdd}>Add-player</button>
              <button onClick={handleRemove}>reomve</button>
        </div>       
      
    )
}