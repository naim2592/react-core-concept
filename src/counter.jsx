import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const add=()=>{
        const newCount=count+1
        setCount(newCount)
    }
    const out=()=>{
        const newCount=count-1
        setCount(newCount)
    }

    return(
        <div >
            <h2>Counter : {count} </h2>
            <button style={{margin:'10px'}} onClick={add}>ADD</button> 
            <button onClick={out}>OUT</button>
        </div>
    )
}