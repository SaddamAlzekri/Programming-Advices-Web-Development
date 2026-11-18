function greating(text) {
    console.log(`${text} ${this.name}`);
}
const names = {name: "Jamra"};
greating.call(names, "By call: hello")
greating.apply(names, ["By apply hello"]);

const userInfo = {
    name: "Saddam",
    showInfo(prefix) {
        console.log(`${prefix} ${this.name}`);
    }
}

const sayHello = userInfo.showInfo;
sayHello.call(userInfo ,"By call: hello");
sayHello.apply(userInfo ,["By apply hello"]);
sayHello.bind(userInfo ,"By bind hello")();

console.log(userInfo.hasOwnProperty("name"));
console.log(Object.hasOwn(userInfo ,"name"));

let a = 10;
let b = a;
b = 15;
console.log(a);
console.log(b);


const userInfoX = userInfo;
userInfoX.name = "Abu-jamra Al-zekri";

console.log("userInfo: ",userInfo.name);
console.log("userInfoX: ", userInfoX.name);
userInfoX.showInfo("Hello");

const peopleInfo = {
    name: "Saddam Al-zekri.",
    age: 26

}

const userInfoXX = structuredClone(peopleInfo);
userInfoXX.name = "Abu-JamraXXX AlzekriXXX";
console.log("userInfoXxX: ", userInfoXX.name);

let items = [1, 2];

items.push(4);
items.push(5);
console.log(items);
items.pop();
console.log(items);
items.unshift(0);
console.log(items);
items.shift();
console.log(items);

let nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1,4));
console.log(nums.slice(2));
console.log(nums.slice());

nums.splice(0, 0, 8, 9);

console.log(nums);
console.log(items.concat(nums));

const array = [1, 2 ,3 ,4 ];
const [x, , , y] = array;
console.log(`X: ${x}, Y: ${y}`);


const cars = {
    brands: "Toyota",
    Model: "LandCrawser"
}
const { brands } = cars;
const { Model } = cars;
console.log(`brands: ${brands}, Model: ${Model}`);

const [first, ...rest] = array;
console.log(`first: ${first}, rest: ${rest}`);

const arrX = [1, 2];
const arrXX = [3, 4];

const merged = [...arrX, ...arrXX];
console.log(merged);

const copy = {...merged};
console.log(copy);


const map = new Map();

map.set(1, "One");
map.set("1", "OneX");
map.set("name", "Saddam");
map.set("username", "Al-zekri");
console.log(map);
console.log(map.get("name") + " " + map.get("username"));

const set = new Set();

set.add("One");
set.add("Two");
set.add("Three");
console.log(set);
console.log(set.size);
console.log(set.has("One"));
console.log(set.has("OneX"));

map.forEach( (name, score) => {
    console.log(`${name}, ${score}`);
});
console.log("\n");
for(let [name, score] of map) {
    console.log(name + " => " + score);
}
console.log("\n");
map.delete(1);
map.delete("1");
for(let [name, score] of map) {
    console.log(name + " => " + score);
}
map.clear();
console.log("\n");
for(let [name, score] of map) {
    console.log(name + " => " + score);
}
let num = "100";
console.log(typeof num);
Number(num);
console.log(typeof Number(num));
console.log(Number("Hello"));