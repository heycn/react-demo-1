import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 1 }
  }

  onClick = () => {
    this.setState({
      x: this.state.x + 1
    })
  }

  render() {
    return (
      <div>
        App
        <button onClick={this.onClick}>+1</button>
        <B name={this.state.x} />
      </div>
    )
  }
}

class B extends React.Component {
  componentWillReceiveProps(newProps) {
    console.log(this.props)
    console.log('变化了')
    console.log(newProps)
  }
  render() {
    return <div>{this.props.name}</div>
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
