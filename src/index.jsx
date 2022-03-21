import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

// function App() {
//   return (
//     <div className='App'>
//       <Son />
//     </div>
//   )
// }

// 类组件
class App extends React.Component {
  constructor() {
    super()
    this.state = { n: 0 }
  }
  render() {
    return (
      <div>n: {this.state.n}</div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
