const profile = {
    name: 'alex',
    age: 20,
    coordinates: {
        latitude: 0,
        longitude: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

// Destructuring with annotations
const {age}: {age: number} = profile; // need expected type annotation from profile object
const { 
    coordinates: {latitude, longitude}
}: {coordinates: {latitude: number; longitude: number}} = profile; // need expected type annotation from profile object