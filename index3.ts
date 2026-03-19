// union--------------------------------------------

type UserInfo = {
    name: string;
    age: number;
    email: string;
}

type Admin ={
    name: string;
    role: string;
}

// union type , here user can be either UserInfo or Admin at a time not both
// but & intersection type, here user can be both UserInfo and Admin at a time
const user: UserInfo | Admin = {
    name: "John",
    age: 30,
    email: "john@example.com",

}

console.log(user.name); // John
console.log(user.age); // 30
console.log(user.email); // john@example.com


// union type with array, each element in arr can be either string or number
const item : (string | number)[] = [1, "hello", 2, "world"];
console.log(item); // [1, "hello", 2, "world"]



// literal type--------------------------------------------

let literal: "admin" | "user" = "admin";
literal = "admin"; // valid
console.log(literal); // admin

literal = "user"; // valid
//  literal = "guest"; // error: Type '"guest"' is not assignable to type '"admin" | "user"'.
console.log(literal); // user



// type alias--------------------------------------------