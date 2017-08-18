const Person = require('./person');

function Teacher(name, age, clazzes) {
  var scope = this;
  Person.call(scope, name, age);
  scope.clazzes = clazzes;
  scope.clazzes.forEach(function(clazz){
    clazz.setTeacher(scope);
  })
  scope.introduce = function() {
    return scope.__proto__.introduce.call(scope) + ' I am a Teacher. ' + getMessage(scope.clazzes);    
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