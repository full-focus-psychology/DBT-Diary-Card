import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const day = 'Monday' // We will pass this to the component as a prop at a later dte

export default class UrgesDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      type: props.type
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  renderDropDown () {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={0} primaryText="0" />
        <MenuItem value={1} primaryText="1" />
        <MenuItem value={2} primaryText="2" />
        <MenuItem value={3} primaryText="3" />
        <MenuItem value={4} primaryText="4" />
        <MenuItem value={5} primaryText="5" />
      </DropDownMenu>
    )
  }

  render(){
    return (
      <div className='row'>
        <div className='col'>
          <p>{this.state.type}</p>
        </div>
        <div className='col'>
          {this.renderDropDown()}
        </div>
      </div>
    )
  }
}
