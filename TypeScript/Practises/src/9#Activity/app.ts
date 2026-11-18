// ==========================================
// Classes
// ==========================================

class Circle {
    constructor(public radius: number) {}
}

class Rectangle {
    constructor(
        public width: number,
        public height: number
    ) {}
}

// ==========================================
// Primitive Narrowing
// ==========================================

function printValue(value: string | number) {

    // TODO:
    // Print uppercase if string.
    if(typeof value === "string")
    {
        console.log(value);
    }else {
        console.log(value);
    }
    // Print with 2 decimals if number.
}

// ==========================================
// instanceof Narrowing
// ==========================================

function printArea(shape: Circle | Rectangle) {

    // TODO:
    // Use instanceof.
    if(shape instanceof Circle)
    {

    }else {

    }
}

// ==========================================
// in Operator
// ==========================================

type Employee = {
    salary: number;
};

type Student = {
    grade: number;
};

function printPerson(person: Employee | Student) {
    // TODO:
    // Print salary or grade.
    if("salary" in person){
        console.log(person.salary);
    }else {
        console.log(person.grade);
    }
}

// ==========================================
// Equality Narrowing
// ==========================================

type Direction =
    | "left"
    | "right"
    | "up"
    | "down";

function move(direction: Direction) {

    // TODO:
    // Print "Going Left"
    // only when direction === "left".
    if(direction === "left")
        console.log("Go left");
    else if(direction === "right")
        console.log("Go right");
    else if(direction ===  "up")
        console.log("Go up");
    else if(direction === "down")
        console.log("Go down");
}

// ==========================================
// Truthiness Narrowing
// ==========================================

function greet(name: string | null) {

    // TODO:
    // Print greeting only if name exists.
    if(name !== null)
        console.log(name);

}

// ==========================================
// Assignment Narrowing
// ==========================================

function assignmentDemo() {

    let value: string | number;

    value = "ProgrammingAdvices";

    // TODO:
    // Use a string method.
    console.log(value.toUpperCase());

    value = 100;

    // TODO:
    // Use a number method.
    console.log(value.toFixed(2));

}

// ==========================================
// User Defined Type Guard
// ==========================================

type Dog = {
    bark(): void;
};

type Cat = {
    meow(): void;
};

// TODO:
// Complete the return type.

function isDog(animal: Dog | Cat) {

    return "bark" in animal;

}

function speak(animal: Dog | Cat) : animal is Dog {

    // TODO:
    // Use isDog().
    return "bark" in animal;
}

// ==========================================
// Discriminated Union
// ==========================================

type Square = {
    kind: "square";
    size: number;
};

type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};

type Shape = Square | Triangle;

function printShape(shape: Shape) {
    // TODO:
    // Use switch.
    if(shape.kind === "square")
        console.log(shape.kind);
    else
        console.log(shape.kind);
}

// ==========================================
// Exhaustive Checking
// ==========================================

function printShapeInfo(shape: Shape) {

    switch (shape.kind) {

        case "square":
            console.log(shape.size);
            break;

        case "triangle":
            console.log(shape.base);
            break;

        default:

            // TODO:
            // Add exhaustive checking here.

    }

}

// ==========================================
// Assertion Function
// ==========================================

// TODO:
// Create an assertion function
// that guarantees name is string.

function printUser(name: string | null) {

    // TODO:
    // Call your assertion function.
    if(name !== null)
        console.log(name.toUpperCase());

}