import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Skills from './Skills'
import diaryCard from './diaryCard'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>DBT Diary Card</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/diary-card" component={diaryCard} />
    </div>
  </Router>
)

export default App
