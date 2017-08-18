// Write your code here
function Class(number) {
  this.number = number;
  this.isClassStudent = false;
}

Class.prototype.assignLeader = function(student) {
  if(this.isClassStudent){
    if(this.teacher) {
      this.teacher.notifyLeaderAssigned(student.name + ' become Leader of Class ' + this.number);
    }
    changeStudentIntroduce(student, 'I am Leader of Class ' + this.number +'.');
    return 'Assign team leader successfully.';
  }
  return 'It is not one of us.';
}

Class.prototype.appendMember = function(student) {
  this.isClassStudent = true;
  if(this.teacher) {
    this.teacher.notifyStudentAppended(student.name + ' has joined Class ' + this.number);    
  }
  changeStudentIntroduce(student, 'I am at Class ' + this.number +'.');
}

Class.prototype.hasStudent = function(student) {
  return this.isClassStudent;
}

Class.prototype.setTeacher = function(teacher) {
  this.teacher = teacher;
}

function changeStudentIntroduce(student, message) {
  student.introduce = function(){
    return this.__proto__.introduce.call(this) + ' I am a Student. ' + message;
  }
}

module.exports = Class 