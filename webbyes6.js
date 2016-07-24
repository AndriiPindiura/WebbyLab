'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
};

class Dog extends Animal {
    bark() {
        return `Dog ${this.name} is barking`;
    }
};

let dog = new Dog('Rey');
alert('dog.getName() ' + dog.getName());
alert('dog.bark() ' + dog.bark());
