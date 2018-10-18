// what is prototye

// A prototype is a property on your function which returns an object
// point to constructor function
 
// example for es5

function Person(name, age){
    this.name = name;
    this.age= age;
}
Person.prototype.eat= function (energy){
    console.log(this.name +'is eating.')
    this.energy += eat
}
// Person1.prototype = Object.create()
 
const Person1 =  new Person ('Nabiji Noor' , 24)

console.log(Person1)


