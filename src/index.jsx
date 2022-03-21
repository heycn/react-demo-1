import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 1 }
  }

  onClick1 = () => {
    this.setState({ x: this.state.x + 1 })
  }

  onClick2 = () => {
    this.setState(state => ({ x: state.x + 1 }))
  }

  render() {
    return (
      <div>
        x: {this.state.x}
        <button onClick={this.onClick2}>+1</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<A />, rootElement)
