class Vehicle {
    // public drive(): void {
    //     console.log('chugga chugga')
    // }
    public honk(): void {
        console.log('beep')
    }
}

// basically copies and pastes the methods of the Vehicle class into the Car class
// class Car extends Vehicle {}
// can override method on the child class
class Car extends Vehicle {
    // public drive(): void {
    //     console.log('vroom')
    // }

    // drive method can only be accessed by other methods in this class
    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
    }
    // BUT cannot change modifier of the child class if overriden from parent class
}

// new keyword creates an instance of the class
const car1 = new Car();
// car1.drive();
car1.startDrivingProcess();
car1.honk();



// Protected modifier
class VehicleProtected {
    // either initialize property when you first define it or in the constructor
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }

    // shorthand
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep')
    };
}

const vehicleProtected = new VehicleProtected('orange');
console.log(vehicleProtected.color)

class CarProtected extends VehicleProtected {
    constructor(public wheels: number, color: string) {
        // need to call super to call the constructor of the parent class
        super(color);
    }

    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const carProtected = new CarProtected(4, 'blue'); // constructor in parent is being called automatically
car1.startDrivingProcess();