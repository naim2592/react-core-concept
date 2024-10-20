import { useState } from "react"

export default function Team (){
    const [primary,updated]=useState(11)
    const upGrade=()=>{
        updated(primary+1)
    }
    const deGrade=()=>{
        updated(primary-1)
    }
  const teamstyle={
    border:'2px solid purple ',
    borderRadius:'12px'
  }

    return(
       <div style={teamstyle}>
         <h2>Team : {primary} </h2>
        <button style={{background:'pink',margin:'5px'}} onClick={upGrade}>UpGrade</button>
         <button style={{background:'pink',margin:'5px'}} onClick={deGrade}>DeGrade</button>
       </div>
    )
}