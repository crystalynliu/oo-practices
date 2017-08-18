class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    basicIntroduce() {
        return 'My name is '+this.name+'. I am '+this.age+' years old.';
    }
    introduce() {
        return this.basicIntroduce();
    }
}

module.exports = Person