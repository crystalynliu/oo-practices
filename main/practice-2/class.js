// Write your code here
function Class(number) {
  this.number = number
}

Class.prototype.assignLeader = function(student) {
  student.introduce = function(){
    return this.__proto__.introduce.call(this) + ' I am a Student. I am Leader of Class ' + this.clazz.number +'.';
  }
}
module.exports = Class 