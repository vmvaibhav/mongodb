const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Updating record', function(){
  var char;

  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 51
    });

    char.save().then(function(){
      done();
    });
  });

  it('Updating one record in the database', function(done){

    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function()
    {
      MarioChar.findOne({_id: char._id}).then(function(result)
      {
        assert(result.name === 'Luigi');
        done();
      });
    });
  });

  it('Incrementing the weight by 1', function(done){

    MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result.weight === 52);
        done();
      });
    });
  });

});
