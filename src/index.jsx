import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  return (
    <div className='App'>
      爸爸
      <Son />
    </div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = { n: 0 }
  }
  add() {
    // this.setState.n += 1 为什么不行
    this.setState({ n: this.state.n + 1 })
  }
  render() {
    return (
      <div className='Son'>
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  // const array = React.useState(0)
  // const n = array[0]
  // const setN = array[1]
  // 下面使用了析构语法优化
  const [n, setN] = React.useState(0)
  return (
    <div>
      孙子 n: {n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
