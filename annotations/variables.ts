// type annotations
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// Classes
// class Car {

// }
// make an instance (variable car) of class Car
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} ={
    x: 10,
    y: 20
}

// Functions
// type annotation includes typing the parameter(s) and the return value
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


// When to use annotations:
// 1) Function that returns the 'any' type (any type - TS has no idea what type it is)
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

    // let's fix the 'any' type by adding a type annotation
    const coordinatesFixed: {x: number; y: number} = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i=0; i<words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i<numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
