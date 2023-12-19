class Person {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let poni = new Person("Poni", 20, ["Proraming", "Games", "Tennis"]);
let doni = new Person("Doni", 19, ["Games", "Tennis"]);

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

let anna = new Student("Anna", 20, "IT");
let janna = new Student("Janna", 19, "IT");

class Circle {
  constructor(radius) {
    this._radius = radius; // Приватное свойство
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.error("Radius must be a positive number");
    }
  }
}

let circle = new Circle(23);
circle.radius = 0;
console.log(circle.radius);
