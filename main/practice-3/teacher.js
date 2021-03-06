const Person = require('./person');

function Teacher(name, age, clazzes) {
  Person.call(this, name, age);
  this.clazzes = clazzes;
  this.clazzes.forEach(function(clazz){
    clazz.setTeacher(this);
  }, this)
  this.introduce = function() {
    return this.__proto__.introduce.call(this) + ' I am a Teacher. ' + getMessage(this.clazzes);    
  } 
}

Teacher.prototype = new Person();

Teacher.prototype.notifyStudentAppended = function(message){
  return message;
}

Teacher.prototype.notifyLeaderAssigned = function(message){
  return message;
} 

Teacher.prototype.isTeaching = function (student){
  return this.clazzes.some(function(clazz){
    return clazz.hasStudent(student);
  });
};

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