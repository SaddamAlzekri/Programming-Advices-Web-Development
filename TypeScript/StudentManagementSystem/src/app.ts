
// Array lesson

let scores: number [] = [85, 90, 75];
let prices: Array<number> = [10.5, 12, 7];
let str: string = "";

scores.push(100);
str = "\nScores : "
scores.forEach(element => {
    str += element + " ";
});
console.log(str);

scores.pop();

str = "Scores after delete : "
scores.forEach(element => {
    str += element + " ";
});
console.log(str);

str = "Prices : "
prices.forEach(element => {
    str += element + " ";
});
console.log(str);

let skills: Array<string> = ["TypeScript", "C#", 'SQL', 'Bootstrap'];
skills.push('React');

str = "Skills : ";
skills.forEach(element => {
    str += element + " ";
});
console.log(str);

//Mixed Data Arrays

let mixedData : (string | number) [] = [1, 'Saddam', 2, "Ali"];
let mixedDataX : Array<string | number> = [1, 'Saddam', 2, "Ali"];
mixedData.push(3);
mixedData.push("Sosoooo");

mixedDataX.push(3);
mixedDataX.push("Fofoooo");

str = "Mixed Data : ";
mixedData.forEach(element => {
    str += element + " ";
});
console.log(str);

str = "Mixed Data X : ";
mixedDataX.forEach(element => {
    str += element + " ";
});
console.log(str);

let numbers: number[] = [1, 2 ,3 ,4 ,5, 6];
let arrEven: number[] = numbers.filter( (num: number) => num % 2 === 0);
let squareNumber: number[] = numbers.map( (num: number) => num * num);
let totalSum: number = numbers.reduce( (acc: number, curr:number) => acc + curr, 0);

str = "Even numbers : ";
arrEven.forEach(element => {
    str += element + " ";
});
console.log(str);

str = "Square Number : ";
squareNumber.forEach(element => {
    str += element + " ";
});
console.log(str);

console.log("Total Sum : ", totalSum);

let studentsInfo: {id: number, name: string, courseName: string} [];
studentsInfo = [
    {id: 1, name: 'Saddam Al-zekri', courseName: 'Typescript'},
    {id: 2, name: 'Asem Al-Magrami', courseName: 'C#'},
]
studentsInfo.push({id: 3, name: "Shamsan Al-Magrami", courseName: "SQL"});

let studentInfo = studentsInfo.find(u => u.id === 3);

if(studentInfo) {
    console.log(`id: ${studentInfo.id} name: ${studentInfo.name} coursename: ${studentInfo.courseName}.`);
}
console.log("\n");