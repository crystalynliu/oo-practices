const Person = require('./person');

function Student(name, age, clazz) {
  Person.call(this, name, age);
  this.clazz = clazz;
  this.introduce = function() {
    return this.__proto__.introduce.call(this) + " I am a Student. I haven't been allowed to join Class.";  
  }
}

Student.prototype = new Person();

module.exports = Student