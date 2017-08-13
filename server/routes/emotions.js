var express = require('express')
var router = express.Router()

var emotionsDb = require('../db/db')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  emotionsDb.getEmotionList(db)
    .then((emotions) => {
      res.json(emotions)
    })
})



module.exports = router
