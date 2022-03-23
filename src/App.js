import { useReducer } from 'react'

const initial = {
  n: 0
}

const reducer = (state, action) => {
  if (action.type === 'add') {
    return { n: state.n + action.number }
  } else if (action.type === 'multi') {
    return { n: state.n * 2 }
  } else {
    throw new Error('找不到 type')
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial)
  const onClick = () => {
    dispatch({ type: 'add', number: 1 })
  }
  return (
    <div>
      n: {state.n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
