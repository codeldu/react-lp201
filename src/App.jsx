import './App.css'
import { Box } from './components/Box'
import { useState } from 'react';


function App() {

  const [name, setName] = useState("Hesen");
  const [inpValue, setInpValue] = useState("");
  const [number, setNumber] = useState(1);
  const [isHide, setIsHide] = useState(false);

  const increaseNum = () =>{
    setNumber(number+1)
  }

  const decreaseNum = () =>{
    setNumber(number-1)
  }


  return (

    <>
      <Box bgColor="red" color="black">
        <input type="text" onInput={(e)=> setInpValue(e.target.value)}/><button onClick={()=> setName(inpValue)}>Save Name</button>
        <button onClick={()=>setIsHide(!isHide)}>{isHide ? "Show" : "Hide"}</button>
        <p style={{display : isHide ? "none" : "block"}}>{name}</p>
      </Box>
      <Box bgColor="blue" color="white">
          <button onClick={decreaseNum}>-</button>
          <h1>{number}</h1>
          <button onClick={increaseNum}>+</button>
      </Box>
    </>
  )
}

export default App
