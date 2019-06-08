const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Deleting records', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

  it('Finds one record from database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds one record by ID from database', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    })
  });

  it('Deletes a record', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      })
    });

  });

});
