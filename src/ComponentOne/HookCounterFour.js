import React, { useState } from 'react'

function HookCounterFour() {
    const[items,setItems]=useState
    const addItems=()=>{
        setItems(...items,{
            id:items.length,
            value:Math.floor (random()+10)+1
        })
    }
  return (
    <div>
        <button onClick={addItems}>Add a number</button>
   <ul>
    {items.map(items=>(
     <li key={items.id}>{items.value} </li>   
    ))

    }
   </ul>
    </div>
  )
}

export default HookCounterFour