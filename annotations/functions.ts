const add = (a: number, b: number): number => { // type annotation for arguments and for return value
    return a + b;
    // TS does not care if the logic is correct, it only checks the types
    // so return a - b will work for TS, but it will not be correct
}

// arrow function, named function, anonymous function assigned to a variable --- all have the same syntax
const subtract = (a: number, b: number): number => {
    return a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiple = function(a: number, b: number): number {
    return a * b;
}

// Void and never
const logger = (message: string): void => {
    console.log(message)
}
    // void return type means it does not return anything (though technicaly can return null or undefined)

const throwError = (message: string): never => {
    throw new Error(message);
}
// never return type means the function will never reach the end of the function (it will always throw an error)

// though much more common to return the error message
// if we think it will only possibly return an error as opposed to never returning anything, we still use the possible return type
const throwErrorMoreCommon = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
}


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysWeather);

// Destructuring with annotations
// We replace the object with the destructured object. Then type annotations goes after it
const logWeatherDestructured = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};
