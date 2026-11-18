countOfApple = 10;
console.log(countOfApple);
var countOfApple;

let countOfOrange;
countOfOrange = 20;
console.log(countOfOrange);

const countOfDate = "Saddam Al-zekri";
console.log(countOfDate);

function NormalFunction(str) {
    console.log(str);
}

const ArrawFunction = str => console.log(str);
const ArrawFunction2 = (name, age) => 
{
    console.log(name + " " + age);
}
    
const number = _=> 2;
const Sum = num => {
    return "The sum: " + (num + 2);
} 

NormalFunction("NormalFunction");
ArrawFunction("Arraw function");
ArrawFunction2("Saddam Al-zekri,", 44);
console.log(number());
console.log(Sum(4));