import React from 'react'

import ZeroToFiveDropdown from './ZeroToFiveDropdown'

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class Urges extends React.Component {

  render(){
    return (
      <div>
        <h2>{day}</h2>
        <h3>Urges</h3>
        <ZeroToFiveDropdown type={'Use'} />
        <ZeroToFiveDropdown type={'Self Harm'} />
        <ZeroToFiveDropdown type={'Suicide'} />
      </div>
    )
  }
}
