var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/v1/skills')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 8)
      t.end()
    })
})
