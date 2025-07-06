import React, { useState, useEffect } from 'react'

const Card = ({title}) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setLiked] = useState(false);
  
  useEffect(() => {
    console.log(`${title} has been Liked :${hasLiked}`);
    
  }, [hasLiked] )

  return (
    <div className='border-2 border-white bg-white text-red h-32 w-32' onClick={()=> (setCount(count +1))}>
      <h2>{title} - {count}</h2>
    <button onClick={()=> setLiked(!hasLiked)}>
      {hasLiked ? '❤️' : '🖤'}

    </button>
    <h1>{}</h1>
    </div>
  ) 
}

const App = () => {
  return (
    <div className='flex gap-5 items-center text-center'>
      <Card title="Praneeth" />
      <Card title="ranjith" />
      <Card title="vignesh" />
    </div>
  )
}

export default App