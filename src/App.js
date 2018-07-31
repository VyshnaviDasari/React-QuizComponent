import React, { Component } from 'react'
import './App.css' 
import Quiz from './Quiz.js'

class App extends Component {
  
  render() {
    return (
      <Quiz quiz_position={1} /> 
    )
  }
}

export default App