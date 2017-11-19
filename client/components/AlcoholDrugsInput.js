import React from 'react'
import TextField from 'material-ui/TextField'

export default class AlcoholDrugsInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      type: props.type
    }
  }

  render(){
    return (
      <div className='row'>
        <div className='col'>
          <p>{this.state.type}</p>
        </div>
        <div className='colWide'>
          <TextField hintText="Enter amount" />
        </div>
        <div className='colWide'>
          <TextField hintText="Specify" />
        </div>
      </div>
    )
  }
}
