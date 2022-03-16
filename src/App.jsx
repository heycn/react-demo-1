import React from 'react'

const App = () => {
  return (
    <div>
      App组件
      <Component numbers={['a', 'b', 'c']} />
    </div>
  )
}

const Component = (props) => {
  return (
    <div>
      {props.numbers.map((item, index) => {
        return (
          <div>
            数组第 {index} 项为：{item}
          </div>
        )
      })}
    </div>
  )
}

export default App
