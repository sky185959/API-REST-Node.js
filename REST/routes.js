var user = require('./model/user');

module.exports = {
  configure: function(app){

    // index
    app.get('/', function(req, res){
      res.send('Api Rest Node.js');
    });

    // get al users
    app.get('/user/', function(req, res){
      user.get(res);
    });
    // get user by id
    app.get('/user/:id/', function(req, res) {
      user.getById(req.params.id, res);
    })
    // add new user
    app.post('/user/', function(req, res){
      user.create(req.body, res);
    });
    // update user
    app.put('/user/', function(req, res){
      user.update(req.body, res);
    });
    // delete user
    app.delete('/user/:id/', function(req, res){
      user.delete(req.params.id, res);
    });

  }
};
