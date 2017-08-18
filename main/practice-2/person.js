// Write your code here
function Person(name, age) {
  this.id = new Date().getTime();
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  return 'My name is ' + this.name + '. I am ' +  this.age + ' years old.';
};

module.exports = Person 