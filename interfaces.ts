const oldCivic1 = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle1 = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
}): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken? ${vehicle.broken}`)
};

printVehicle1(oldCivic1)

// Fixing annotations with interfaces
// Capitalize the interface and use generic name. 
interface Vehicle1 {
    name: string;
    year: Date;
    // year: number; // not limited to primitive types
    broken: boolean;
    summary(): string; // this is a function that returns a string
};

const oldCivic = {
    name: 'civic',
    year: new Date(),
    // year: 2000,
    broken: true,
    summary(): string {
        return `
            Name: ${this.name}
            Year: ${this.year}
            Broken? ${this.broken}
        `
    }
}


const printVehicle = (vehicle: Vehicle1): void => {
    console.log(vehicle.summary())
}

printVehicle(oldCivic)

// Code reuse with interfaces
// can eliminate parts of the object that are not needed and still be valid. Just rename/refactor as appropriate
interface Reportable {
    summary(): string;
};

const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    // year: 2000,
    broken: true,
    summary(): string {
        return `
            Name: ${this.name}
            Year: ${this.year}
            Broken? ${this.broken}
        `
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `
            My drink has ${this.sugar} grams of sugar.
        `
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};

printSummary(oldCivic2);
printSummary(drink);

// General strategy for reusable code in TS