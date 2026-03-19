// let x: number = 10;
// let y: number = 20;
// let z: number = x + y;

// console.log(z);

// // array

// let arr: string[] = ["1", "2", "3", "4", "5"];
// console.log(arr);

// // tuple
// let tuple: [string, number, boolean] = ["Hello", 10, true];
// console.log(tuple);

// // enum
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c: Color = Color.White; // This will cause an error because White is not defined in the Color enum
// console.log(c);

// object. ---------------------------------------------------

// type Person = {
//     name: string;
//     "full Name"?: string;
//     age: number;
//     isStudent: boolean;
//     marks: number[];
//     subObject?: {
//         subName: string;
//         subValue: number;
//     }
// }

// let person: Person = {
//     name: "John",
//     "full Name": "John Doe",
//     age: 30,
//     isStudent: false,
//     marks: [80, 90, 85],
//     subObject: {
//         subName: "Math",
//         subValue: 95
//     }
// };

// let key = "name";

// person[key] = "Vikash";
// person.age = 25;
// person.isStudent = true;
// person.marks = [85, 90, 95];
// person["full Name"] = "Jane Doe";
// person.subObject = {
//     subName: "Science",
//     subValue: 90
// };

// console.log(person);

// type and & ---------------------------------------------------

// type Person = {
//     name: string;
//     age: number;
// }

// type Student = {
//     isStudent: boolean;
//     marks: number[];
// }

// type StudentPerson = Person & Student;

// let studentPerson: StudentPerson = {
//     name: "John Doe",
//     age: 30,
//     isStudent: true,
//     marks: [80, 90, 85]
// };

// console.log(studentPerson);

// // interface ---------------------------------------------------

// interface Person {
//     name: string;
//     "full Name"?: string;
//     age: number;
//     isStudent: boolean;
//     marks: number[];
//     subObject?: {
//         subName: string;
//         subValue: number;
//     }
// }

// let person: Person = {
//     name: "John",
//     "full Name": "John Doe",
//     age: 30,
//     isStudent: false,
//     marks: [80, 90, 85],
//     subObject: {
//         subName: "Math",
//         subValue: 95
//     }
// };

// let key = "name";

// person[key] = "Vikash";
// person.age = 25;
// person.isStudent = true;
// person.marks = [85, 90, 95];
// person["full Name"] = "Jane Doe";
// person.subObject = {
//     subName: "Science",
//     subValue: 90
// };

// console.log(person);

// interface extending---------------------------------------------------

// interface Person {
//     name: string;
//     age: number;
// }

// interface Student extends Person {
//     isStudent: boolean;
//     marks: number[];
// }

// let student: Student = {
//     name: "John",
//     age: 30,
//     isStudent: true,
//     marks: [80, 90, 85]
// };

// console.log(student);

// function for filter array---------------------------------------------------

// function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
//   return arr.filter((item) => condition(item));
// }

// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// let oddNumbers = filterArray<number>(numbers, (num) => num % 2 !== 0);
// console.log(oddNumbers); 


// reverse Pair ---------------------------------------------------

function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}


let reversedPair= reversePair<number, string>(10, "Hello");
console.log(reversedPair); // Output: ["Hello", 10]