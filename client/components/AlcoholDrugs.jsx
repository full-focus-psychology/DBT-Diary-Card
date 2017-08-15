import React from 'react'

import AlcoholDrugsInput from './AlcoholDrugsInput'

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class AlcoholDrugs extends React.Component {
  render(){
    return (
      <div>
        <h2>{day}</h2>
        <h3>Alcohol and Drugs</h3>
        <AlcoholDrugsInput type={'Illicit'} />
        <AlcoholDrugsInput type={'ETOH'} />
        <AlcoholDrugsInput type={'Prescription'} />
        <AlcoholDrugsInput type={'OTC'} />
      </div>
    )
  }
}
