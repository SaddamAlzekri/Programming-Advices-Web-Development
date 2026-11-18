let numbers: readonly number[] = [1, 2, 3, 4, 5, 6];
let skills: ReadonlyArray<string> = ["Typescript", 'SQL', "C#"];

// Error: Property 'push' does not exist on type 'readonly number[]'.
//numbers.push(7); 

// for numbers just
function readonlyArrayExample(arr: readonly number[]): void {
    let str: string = "Readonly Array Example : ";
    arr.forEach(element => {
        str += element + " ";
    });
    console.log(str);
}

// for any array number, strings and any type
function readonlyArray<T>(arr: readonly T[]): void {
    let str: string = "Readonly Array Example : ";
    arr.forEach(element => {
        str += element + " ";
    });
    console.log(str);
}

readonlyArray(numbers);
readonlyArray(skills);






