console.log(Math.round(3.4));
console.log(Math.floor(3.4));
console.log(Math.trunc(3.4));
console.log(Math.sqrt(16));
console.log(Math.sqrt(16));
console.log(Math.max(27, 1, 3 , 44));
console.log(Math.min(27, 1, 3 , 44));
console.log(Math.floor(Math.random() * 10 - 1) + 1); 

const colors = ["red", "green", "yellow"];
let index = Math.floor(Math.random() * 3 - 1) + 1;
console.log(colors[index]);

const date = new Date();
console.log(date);

const birthday = new Date(1999, 10, 19);
console.log(birthday);

const birthday2 = new Date("1999, 10, 19");
console.log(birthday);

const date1 = new Date("2026, 01, 01");
const date2 = new Date("2026, 12, 31");

const diff = date2 - date1;

console.log(diff);

const days = (diff / 1000 / 60 / 60 / 24);
console.log(`The days is ${days}`);

class User {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    UserInfo () {
        console.log(`Name : ${this.name}, and Age : ${this.age}`);
    }
}

const userInfo = new User("Sosoo", 24);

userInfo.UserInfo();

class Person {
    constructor(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 18) {
            throw new Error("Error: The age lower of 18 years");
        }
        this._age = value; 
    }
}

const personInfo = new Person(26);
personInfo.age = 15;
console.log(personInfo.age);