// type anotation if initializing on a different line
const carMakers1: string[] = [];

//type inference if initializing on the same line
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// an array that contains an array of strings
const carsByMake1: string[][] = [];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
 ];

 
// Benefits of typed arrays
// Help with inference when extracting values
const carExample = carMakers[0]; //index access to carMakers will return a string
const myCar = carMakers.pop(); // to remove the last element in the array. pop will return a string

// Prevent incompatible values
// carMakers.push(100); // error

// Help with 'map', 'forEach', 'reduce', etc functions
carMakers.map((car: string): string => {
   return car.toUpperCase(); // autocomplete will show string methods 
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
// if you hover over importantDates, it will show (string | Date)[] (pipe operator)
// if you inititalize the array with a date, it will be a Date object, not allowing you to push a string (unless you manually annotate)
importantDates.push('2030-10-11')
importantDates.push(new Date())
// importantDates.push(100) // error
