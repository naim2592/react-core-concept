import './App.css'

export default function Friend ({friend}){
    console.log(friend)
    return(
      <div className='friend'>
          <h3>Name : {friend.name} </h3>
          <p>Email :{friend.email} </p>
      </div>
    )
}