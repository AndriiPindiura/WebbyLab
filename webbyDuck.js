'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
};

class Duck extends Animal {
    quack() {
        return `Duck ${this.name} is quacking`;
    }
};

let duck = new Duck('Donald');
alert('duck.getName() ' + duck.getName());
alert('duck.quack() ' + duck.quack());
