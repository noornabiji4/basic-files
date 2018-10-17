class Building {
    constructor(options) {
        this.flower = options.flower
        this.park = options.park;
    }
    garden() {
        return "My Garden"
    }
}
class Build extends Building {
    constructor(options) {
        super(options);
        // this.flower = options.flower;
        // this.park = options.park;
    }
    parking() {
        return "Parking all vehicle"
    }
}
const myBuilding = new Building({ flower: "red", park: "bike" })

myBuilding;
