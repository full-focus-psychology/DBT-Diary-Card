import request from 'superagent'

export const receiveSkills = (skills) => {
  return {
    type: 'RECEIVE_SKILLS',
    skills
  }
}

export function getSkillList() {
  return (dispatch) => {
    request
      .get(`/api/v1/skills`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveSkills(res.body))
      })
  }
}
