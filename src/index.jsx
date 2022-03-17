import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'



class App extends React.Component {
  constructor() {
    super()
    this.state = { n: 0 }
  }
  add() {
    this.setState(state => {
      const n = state.n + 1   // 这个 n 是新的 n
      console.log(n)          // 然后把新的 n 打印出来
      return { n }            // 缩写
    })
  }
  render() {
    return (
      <div className='Son'>
        n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
