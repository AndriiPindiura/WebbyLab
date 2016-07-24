function Animal(name) {
    this.name = name;
};

Animal.prototype.getName = function () {
    return this.name;
};

function Dog(name) {
    this.name = name;
};

Dog.prototype.bark = function () {
    return 'Dog ' + this.getName() + ' is barking';
};

Dog.prototype.__proto__ = Animal.prototype;

var dog = new Dog('Spark');
alert('dog.getName() ' + dog.getName());
alert('dog.bark() ' + dog.bark());
