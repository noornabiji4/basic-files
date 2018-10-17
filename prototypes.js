class Vehicle {
    constructor(options){
        this.model = options.model;
        this.color = options.color;

    }
    Bike(){
        return "This is a Bike "
    }
}
class Vehicle2 extends Vehicle {
    constructor(options){
        super(options);

    }
    Car(){
        return "This is a Car"
    }
}
const myVehicle = new Vehicle ({model : 2018, color:"red"});

myVehicle;