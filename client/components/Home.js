import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
      <button><Link to='/skills'>Skills</Link></button>
      <button><Link to='/diary-card'> Diary Card</Link></button>
    </div>
)

export default Home
