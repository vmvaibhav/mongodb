const mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise;

before(function(done){
  //connect to db
  mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser:true});

  mongoose.connection.once('open', function(){
    console.log('Connection is working, go eat something');
    done();
  }).on('error', function(err){
    console.log('Connection Error: '+ err);
  });
});

//clear collection before each test
beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
