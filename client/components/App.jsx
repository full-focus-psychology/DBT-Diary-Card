import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import AlanTestComponent from './AlanTestComponent'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>DBT Diary Card</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/alan-test" component={AlanTestComponent} />
    </div>
  </Router>
)

export default App
