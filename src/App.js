import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { n: 1 }
  }
  onClick = () => {
    // onClick 函数里对 n 进行了 +1 -1 操作
    this.setState(state => ({ n: state.n + 1 }))
    this.setState(state => ({ n: state.n - 1 }))
  }
  shouldComponentUpdate(newProps, newState) {
    if (newState.n === this.state.n) {
      return false
    } else {
      return true
    }
  }
  render() {
    console.log('render了')
    return (
      <div>
        n: {this.state.n}
        <button onClick={this.onClick}>+1</button>
      </div>
    )
  }
}

export default App
