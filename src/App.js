import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({ name: 'heycn', age: 22 })
  const onClick = () => {
    setUser({
      ...user,
      name: '名字被改了'
    })
  }
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <button onClick={onClick}>修改名字</button>
    </div>
  )
}

export default App
