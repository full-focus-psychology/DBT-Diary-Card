import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'


const App = () => (
  <Router>
    <div className='app-container'>
      <h1>DBT Diary Card</h1>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

export default App
