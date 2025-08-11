class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    get getName() {
        return this.name;
    }

    set setAge(newAge) {
        this.age = newAge; // Correctly set the new age
    }
}

const person = new Person("John", 30);
person.setAge = 25; // Using the setter to change the age
console.log(person.name, person.age); // Outputs: John 25

class Student extends Person {
    constructor(name, age) {
        super(name, age); // Call the parent constructor
    }
    
    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student = new Student("Alice", 20);
student.study(); // Outputs: Alice is studying.

class Teacher extends Person { // Added missing braces
    constructor(name, age) {
        super(name, age);
    }
   
    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Outputs: Bob is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;