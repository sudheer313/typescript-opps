import React, { useState } from 'react'

interface CounterProps{
    initialCount:number;
}

const Counter: React.FC<CounterProps> = ({initialCount}) => {
    const [count, setCount]= useState(initialCount);
    const increment=()=>{
        setCount(count+1)
    }
    
    const decrement=()=>{
        if (count>0){
            setCount(count-1)
        }
       
    }
  return (
    <div>
        <h2>Counter:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter