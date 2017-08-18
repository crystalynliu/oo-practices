const Person = require('./person');

function Teacher(name, age, clazzes) {
  Person.call(this, name, age);
  this.clazzes = clazzes;
  this.introduce = function() {
    return this.__proto__.introduce.call(this) + ' I am a Teacher. ' + getMessage(this.clazzes);    
  }
} 

Teacher.prototype = new Person();

function getMessage (clazzes) {
  if(clazzes.length){
    var clazzNumbers = clazzes.map(function(clazz){
      return clazz.number;
    }).join(',');
    return 'I teach Class ' + clazzNumbers +'.'
  }
  return 'I teach No Class.';
}

module.exports = Teacher;