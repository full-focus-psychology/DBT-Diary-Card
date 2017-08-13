var express = require('express')
var router = express.Router()

var skillsDb = require('../db/db')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  skillsDb.getSkillList(db)
    .then((skills) => {
      res.json(skills)
    })
})



module.exports = router
