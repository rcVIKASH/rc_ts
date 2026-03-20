// interface

// interface for function

interface MathOperation {
  (a: number, b: number): number;
}

let add: MathOperation = (x, y) => x + y;
let multiply: MathOperation = (x, y) => x * y;

// without interface
let sub = (x: number, y: number): number => x - y;

console.log(add(5, 10)); // Output: 15
console.log(sub(5, 10)); // Output: -5
console.log(multiply(5, 10)); // Output: 50

// type alias for object

type vehicle = {
  name: string;
  speed: number;
};

const car: vehicle = {
  name: "Toyota",
  speed: 120,
};

console.log(car);

// interface for object

interface vehicle2 {
  name: string;
  speed: number;
}

interface price {
  price: number;
}

const bike: vehicle2 & price = {
  name: "Honda",
  speed: 80,
  price: 1500,
};

console.log(bike);

// interface for class

interface Shape {
  radius: number;
  area(): number;
  perimeter(): string;
}

interface Colored {
  color: string;
}

class Circle implements Shape, Colored {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): string {
    return `The perimeter is ${2 * Math.PI * this.radius}`;
  }
}

const circle = new Circle(5, "red");
console.log(circle.color); // Output: red
console.log(circle.area()); // Output: 78.53981633974483
console.log(circle.perimeter()); // Output: 31.41592653589793


// interface for array

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Hello", "World"];
console.log(myArray[0]); // Output: Hello
console.log(myArray[1]); // Output: World


interface NumberDictionary {
  [index: string]: number;
}

let myDict: NumberDictionary = {
  "one": 1,
  "two": 2,
  "three": 3
};

console.log(myDict["one"]); // Output: 1
console.log(myDict["two"]); // Output: 2
console.log(myDict["three"]); // Output: 3


interface Song {
    title: string;
    artist: string;
    info(title:string, artist: string): string ;
}

const song: Song = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    info(title: string, artist: string): string {
        return `${title} is a song by ${artist}.`;
    }
};

console.log(song.info(song.title, song.artist)); // Output: Shape of You is a song by Ed Sheeran.
console.log(song.info("yes", "vikash")); // Output: yes is a song by vikash.






interface User {
    name: string;
    age: number;
    greet(name: string): string;
}

interface Admin extends User {
    role: string;
}

const admin: Admin = {
    name: "Alice",
    age: 30,
    role: "superadmin",
    greet(name: string): string {
        return `Hello ${name}, I'm ${this.name} and I'm an ${this.role}.`;
    }
};

console.log(admin.greet("Bob")); // Output: Hello Bob, I'm Alice and I'm an superadmin.