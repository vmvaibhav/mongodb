const mocha  = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding records', function(){

  var char;
  //create before Finding
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

  //finds a record
  it('Finds one record from database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    })
  });

  //finds a record by ID
  it('Finds one record by ID from database', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    })
  });

});
