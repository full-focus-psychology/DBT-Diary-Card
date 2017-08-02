import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import {getGreetings} from '../actions/greetings'

const Home = () => (
    <div>
      <button><Link to='/skills'>Skills</Link></button>
      <button><Link to='/diary-card'> Diary Card</Link></button>
    </div>
)

export default Home
