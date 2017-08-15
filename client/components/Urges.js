import React from 'react'

import UrgesDropDown from './UrgesDropDown'

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class Urges extends React.Component {

  render(){
    return (
      <div>
        <h2>{day}</h2>
        <h3>Urges</h3>
        <UrgesDropDown type={'Use'} />
        <UrgesDropDown type={'Self Harm'} />
        <UrgesDropDown type={'Suicide'} />
      </div>
    )
  }
}
