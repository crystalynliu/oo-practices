// Write your code here
function Class(number) {
  this.number = number;
  this.isClassStudent = false;
  this.teachers = [];
}

Class.prototype.assignLeader = function(student) {
  if(this.isClassStudent){
    this.teachers.forEach(function(teacher){
      teacher.notifyLeaderAssigned(student.name + ' become Leader of Class ' + this.number);
    },this);
    changeStudentIntroduce(student, 'I am Leader of Class ' + this.number +'.');
    return 'Assign team leader successfully.';
  }
  return 'It is not one of us.';
}

Class.prototype.appendMember = function(student) {
  this.isClassStudent = true;
  this.teachers.forEach(function(teacher){
    teacher.notifyStudentAppended(student.name + ' has joined Class ' + this.number);    
  },this);
  changeStudentIntroduce(student, 'I am at Class ' + this.number +'.');
}

Class.prototype.hasStudent = function(student) {
  return this.isClassStudent;
}

Class.prototype.setTeacher = function(teacher) {
  this.teachers.push(teacher);
}

function changeStudentIntroduce(student, message) {
  student.introduce = function(){
    return this.__proto__.introduce.call(this) + ' I am a Student. ' + message;
  }
}

module.exports = Class 