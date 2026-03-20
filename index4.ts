// oop

class Person {
   protected name :string;
   protected age :number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }       
}

class Student extends Person {
    protected grade :number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }


    study() {
        console.log(`${this.name} is studying and is in grade ${this.grade}.`);
    }
}

const person1 = new Person("Alice", 30);
person1.introduce();

const student1 = new Student("Bob", 20, 90);
student1.introduce();
student1.study();