import React from 'react'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { n: 1 }
  }
  onClick = () => {
    // onClick 函数里对 n 进行了 +1 -1 操作
    this.setState(state => ({ n: state.n + 1 }))
    this.setState(state => ({ n: state.n - 1 }))
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
