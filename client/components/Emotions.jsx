import React from 'react'

import ZeroToFiveDropdown from './ZeroToFiveDropdown'

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class Emotions extends React.Component {

  render(){
    return (
      <div>
        <h2>{day}</h2>
        <h3>Emotions</h3>
        <ZeroToFiveDropdown type={'Sad'} />
        <ZeroToFiveDropdown type={'Shame'} />
        <ZeroToFiveDropdown type={'Anger'} />
        <ZeroToFiveDropdown type={'Joy'} />
        <ZeroToFiveDropdown type={'Fear'} />
        <ZeroToFiveDropdown type={'Guilt'} />
        <ZeroToFiveDropdown type={'Jealousy'} />
        <ZeroToFiveDropdown type={'Disgust'} />
        <ZeroToFiveDropdown type={'Envy'} />
      </div>
    )
  }
}
