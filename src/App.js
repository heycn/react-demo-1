import { useState } from 'react'

const App = () => {
  const [n, setN] = useState(0)
  return (
    <div>
      n: {n}
      <button onClick={() => setN(n + 1)}>n+1</button>
    </div>
  )
}

export default App
