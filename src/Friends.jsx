import { useEffect, useState } from "react"
import './App.css'
import Friend from "./friend"
export default function Friends(){
    const [friends,setFriends]=useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setFriends(data))
    },[])
    return(
        <div>
            <h2 className="friend">Friends {friends.length}</h2>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}