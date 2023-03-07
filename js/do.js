'use strict'
let x = 10,
    y = 1;

console.log(`значение х = ${x} \n значение у = ${y} `);

const arr = [1, 'qwe', x, 12];

console.log(arr[0] + arr[3]);


const obj = {
    name: 'zenua',
    age: 34,
    writeInfo: function () {
        console.log(`Name is ${this.name} \n Age ${this.age}`);
        console.log(this.age + 1);
        this.daughtersCount = 3;
    }
}

obj.writeInfo();
console.log(obj);

var obj = {
    name: "zenua",
    age: 34,
    writeInfo: function () {
        console.log("Name is " + this.name + " \n Age " + this.age);
        console.log(this.age + 1);
        this.daughtersCount = 3
    }
};
obj.writeInfo();
console.log(obj);