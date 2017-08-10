
const getSkillList = (db) => {
  return db('skills')
    .select('*')
}

const getEmotionList = (db) => {
  return db('emotions')
    .select('*')
}


module.exports = {
  getSkillList,
  getEmotionList
}
