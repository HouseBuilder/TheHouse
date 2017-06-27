import React, { Component } from 'react'
import { Nav } from './components/container'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Nav />
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default App
