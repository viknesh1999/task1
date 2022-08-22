import React,{useState} from 'react'

function HookCounterTwo() {
  const initialCount=0 
  const [count,setcount]=useState(initialCount)

  const incrementfive=()=>{
    for(let i=0; i<5; i++){
      setcount(prevcount=>prevcount+1)
    }
  }

  return (
    <div>
      count:{count}
      <button onClick={()=>setcount(initialCount)}>Reset</button>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <button onClick={incrementfive} >Increment 5</button>
    </div>
  )
}

export default HookCounterTwo