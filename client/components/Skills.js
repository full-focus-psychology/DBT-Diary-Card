import React from 'react'
import {connect} from 'react-redux'
import {getSkillList} from '../actions/skills'

const renderSkill = (key, skill) => (
      <h1 key={key}>{skill.id}</h1>
  )

const Skills = ({skills, dispatch}) => (
   <div>
    this.dispatch(getSkillList())
    {renderSkill(skills)}
   </div>

)
const mapStateToProps = (state) => {
  return {skills: state.skills}
}

export default connect(mapStateToProps)(Skills)
