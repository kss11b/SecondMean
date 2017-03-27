var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var item = require('../controllers/item.js');
module.exports = function(app) {
  app.post('/create', function(req, res) {
    console.log('routes reached')
    users.create(req, res);
  });
  app.post('/login', function(req, res) {
    users.login(req, res);
  });
  app.post('/item', function(req, res) {
    item.item(req, res)
})
  app.get('/users/:id', function(req, res){
    users.show(req, res)
  })
  app.get('/pull', function(req,res){
    item.pull(req, res)
  })
  app.put('/done/:id', function(req, res){
    item.done(req, res)
  })
  app.get('/show/:id', function(req, res){
    item.show(req, res)
  })
  app.get('/getUsers', function(req, res){
    users.getUsers(req, res)
  })
}
