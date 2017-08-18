const Person = require('./person');

class Student extends Person {
    constructor(name,age,clazz){
        super(name,age);
        this.clazz = clazz;
    }
    introduce(){
        return super.basicIntroduce()+' I am a Student. I am at Class '+this.clazz+'.';
    }
}

module.exports = Student