import React from 'react'
import {connect} from 'react-redux'
import {getSkillList} from '../actions/skills'

const renderSkill = (i, skill) => (
      <div>
        <h1 key={i}>{skill.action}</h1>
      </div>
  )

const Skills = ({skills, dispatch}) => (
   <div>
    <button onClick={() => dispatch(getSkillList())}>Show Skills</button>
    {skills.map(renderSkill)}
   </div>
)

const mapStateToProps = (state) => {
  return {skills: state.skills}
}

export default connect(mapStateToProps)(Skills)
