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
    console.log(this.state.n)
  }
  render() {
    return (
      <div className='Son'>
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
