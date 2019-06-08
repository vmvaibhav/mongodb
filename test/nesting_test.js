const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nested records',function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  it('Creates a nested record', function(done){
    var author = new Author({
      name: 'Bucky Robert',
      age: 31,
      books: [{title:'Game of thrones', pages: 244},{title: 'Stay behind', pages: 747}]
    });

    author.save().then(function(){
      Author.findOne({name: 'Bucky Robert'}).then(function(result){
        assert(result.books.length === 2);
        done();
      });
    });
  });

  it('Update the nested record', function(done){
    var author = new Author({
      name: 'Bucky Robert',
      age: 31,
      books: [{title:'Game of thrones', pages: 244},{title: 'Stay behind', pages: 747}]
    });

    author.save().then(function(){
      Author.findOne({name: 'Bucky Robert'}).then(function(result){
        result.books.push({title: 'Friends', pages: 374});
        result.save().then(function(){
          Author.findOne({name: 'Bucky Robert'}).then(function(result2){
            assert(result2.books.length === 3);
            done();
          });

        });
      });
    });

  });

});
