import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0)

    const handlePlus =()=>{
        setCount (Count + 1)

    }
  return (
    <div>
      <h2>Counter: {Count}</h2>
      <button> -- </button><br/>
      <button onClick={handlePlus}> + </button>
    </div>
  )
}

export default Counter
