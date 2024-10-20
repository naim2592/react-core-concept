import Counter from './counter'
import './App.css'
import Team from './team'
import Users from './users'
import Friends from './Friends'


function App() {
   const handleClicked=()=>alert('Someone is clicking me')

  return (
    <>
    <Team></Team>
      <Counter></Counter>
      <h2>React core concept 2</h2>
      <button onClick={handleClicked}>Click me</button>
      <button onClick={()=>alert('He clicked me again')}>Click me</button>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
