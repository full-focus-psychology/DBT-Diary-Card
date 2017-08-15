import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'


export default class SkillsDropdown extends React.Component {
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
        <MenuItem value={0} primaryText="0 - Not thought about, didn't use." />
        <MenuItem value={1} primaryText="1 - Thought about, didn't use, didn't want to" />
        <MenuItem value={2} primaryText="2 - Thought about, didn't use, wanted to" />
        <MenuItem value={3} primaryText="3 - Tried but couldn't use them" />
        <MenuItem value={4} primaryText="4 - Tried, could do them but didn't help" />
        <MenuItem value={5} primaryText="5 - Tried, could use them, helped" />
        <MenuItem value={6} primaryText="6 - Didn't try, used them, didn't help" />
        <MenuItem value={7} primaryText="7 - Didn't try, used them, helped" />
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
