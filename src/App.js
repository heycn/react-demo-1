import React, { useState } from 'react'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => setN(n + 1)
  return (
    <>
      <div>n: {n}</div>
      <button onClick={onClick}>+1</button>
    </>
  )
}

export default App
