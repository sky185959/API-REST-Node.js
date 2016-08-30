var connection = require('../connection.js');

function users(){
  // get all users
  this.get = function(res){
    connection.acquire(function(err, con){
      con.query('SELECT * FROM USER', function(err, result){
        con.release();
        res.send(result);
      });
    });
  }

  // get user by id
  this.getById = function(id, res){
    connection.acquire(function (err, con) {
      con.query('SELECT * FROM USER WHERE ID = ?', [id], function(err, result){
        con.release();
        if(err){
          res.send({status : 1, message : 'User find id failed'});
        }
        res.send(result);
      })
    })
  }

  // create new users
  this.create = function(data, res){
    connection.acquire(function(err, con){
      con.query('INSERT INTO USER (fullname, email, username, password) values(?, ?, ?, ?)', [data.fullname, data.email, data.username, data.password], function(err, result){
        con.release();
        if(err){
          res.send({status : 1, message: 'User creation failed'});
        }else{
          res.send({status : 0, message : 'User creation successfully'});
        }
      });
    });
  };

  // update User
  this.update = function(data, res) {
     connection.acquire(function(err, con) {
       con.query('UPDATE USER SET fullname = ?, email = ?,  username = ?, password = ? WHERE id = ?', [data.fullname, data.email, data.username, data.password, data.id], function(err, result) {
         con.release();
         if (err) {
           res.send({status: 1, message: 'User update failed'});
         } else {
           res.send({status: 0, message: 'User updated successfully'});
         }
       });
     });
   };

   // delete User
   this.delete = function(id, res){
     connection.acquire(function(err, con){
       con.query('DELETE FROM USER WHERE ID = ?', [id], function(err, result){
         con.release();
         if(err){
           res.send({status : 1, message : 'User delete failed'});
         }else{
           res.send({status : 0, message : 'User delete successfully'});
         }
       });
     });
   };

}

module.exports = new users();
