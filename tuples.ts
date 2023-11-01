const drinks = {
    color: 'brownn',
    carbonated: true,
    sugar: 40
}

// problem - this is an array, const pepsi: (string | number | boolean)[]
const pepsiArray = ['brown', true, 40]; 
pepsiArray[0] = 40;
pepsiArray[2] = 'brown';
// breaks data structure, so we have to add an annotation to make it a tuple
const pepsiTuple: [string, boolean, number] = ['brown', true, 40]

// could also use a type alias (that way we don't have to repeat the annotation every time we create a new drink)
type Drink = [string, boolean, number] // creating an idea of a tuple in our application
const pepsiTypedTuple: Drink = ['brown', true, 40]
const spriteTypedTuple: Drink = ['clear', true, 40]
const teaTypedTuple: Drink = ['brown', false, 0]


// When to use tuples
// csv files to represent a single row - we can use tuples to represent a single row

const carSpecs: [number, number] = [400, 3354]
// object representation - easier to understand at a glance
const carStats = {
    horsepower: 400,
    weight: 3354
}