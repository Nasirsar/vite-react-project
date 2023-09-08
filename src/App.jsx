import './App.css'
import Counter from './count'
import Team from './team'
import User from './user'
import Friends from './Friends'
function App() {
  function handleClick(){
    alert('click and show')
  }
  const handleClick2 = ()=>{
    alert('error -text')
  }
  const addToFive= (num)=>{
    alert(num+5)
  }

  return (
    <>
      <h3>React core concept - 2</h3>
     <Friends></Friends>
      <User></User>
      <Team></Team> 
      <Counter></Counter>
      <button onClick={handleClick}>click-1</button>
      <button onClick={handleClick2}>click-2</button>
      <button onClick={() =>{alert('third-click')}}>third</button>
      {/* difficult */}
     <button onClick={()=> addToFive(6)}>four</button>
    </>
  )
}

export default App
