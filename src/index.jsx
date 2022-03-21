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

// 类组件
class Son extends React.Component {
  constructor() {
    super()
    this.state = { n: 0, m: 0 }
  }
  addN() {
    this.setState(state => {
      return { n: state.n += 1 } // 不会覆盖 m
    })
  }
  addM() {
    this.setState(state => {
      return { m: state.m += 1 } // 不会覆盖 n
    })
  }
  render() {
    return (
      <div className='Son'>
        n: {this.state.n}
        <button onClick={() => this.addN()}>+1</button>
        m: {this.state.m}
        <button onClick={() => this.addM()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

// 函数组件
const Grandson = () => {
  const [n, setN] = React.useState(0)
  return (
    <div className='Grandson'>
      n: {n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
