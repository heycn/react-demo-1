import React, { useState, useEffect } from 'react'

const App = props => {
  const [n, setN] = useState(0)
  const onClick = () => setN(n + 1)
  useEffect(() => {
    console.log('use effect')
  }, [])
  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
