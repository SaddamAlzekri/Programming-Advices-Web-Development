const user = { name : "Saddam",
    age: 26,
}

for(let key in user)
{
    console.log(key+ " " + user[key]);
}

for(let key of Object.keys(user))
{
    console.log(key+ " " + user[key]);
}

const user = { name : "Saddam",
    age: 26,
}

for(let key in user)
{
    console.log(key+ " " + user[key]);
}

for(let key of Object.keys(user))
{
    console.log(key+ " " + user[key]);
}

const user = {
    name: "Saddam Al-zekri",
    age: 26,
    grade: "A"
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.fromEntries(Object.entries(user)));

const car = {
    brand:"BMW",
    showBrand () {
        console.log("The car: ", this.brand);
    }
}

car.showBrand();

const personInfo = {
    ["full name"]: "Saddam Al-zekri",
    age: 26,
    showInfo () {
        console.log (`My name is ${this.name}. I am ${this.age}`);
    }
}

personInfo["full name"] = "Jamra Saddam Hussein Al-zekri";
console.log(personInfo["full name"]);
personInfo.showInfo();

const prop = "age";

const personInfo = {
    name: "Liyla Saddam Hussein Al-zekri",
    [prop]: 26,
    showInfo () {
        console.log(`My name is ${this.name}. I am ${this.age}`);
    }
}

personInfo.showInfo();
