const Mock = require('mockjs')
const util = require('./util')
module.exports = function(app) {
  app.get('/api/user', function(rep, res) {
    var json = util.getJsonFile('./user.json')
    res.json(Mock.mock(json))
  })
}
