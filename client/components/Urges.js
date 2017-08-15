import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class Urges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 1}
  }


  renderDropDown () {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
    )
  }

  renderUrges () {
    return (
      <div>
        <div className='row'>
          <div className='col'>
            <p>Use</p>
          </div>
          <div className='col'>
            {this.renderDropDown()}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>Self harm</p>
          </div>
          <div className='col'>
            {this.renderDropDown()}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>Suicide</p>
          </div>
          <div className='col'>
            {this.renderDropDown()}
          </div>
        </div>
      </div>
    )
  }
  render(){
    return (
      <div>
        <h2>{day}</h2>
        <h3>Urges</h3>
        {this.renderUrges()}
      </div>
    )
  }
}
