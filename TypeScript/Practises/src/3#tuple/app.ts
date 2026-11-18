let userProfile : [number, string, boolean];

userProfile = [101, "Saddam Al-zekri", true];

let priceTax : [number, string];

function calculateTax(price: number) :  [number, string] {
    const tax = price * 0.15;
    return [tax, "0.15%"];
}

const [texAmount, statusMessage] = calculateTax(10);

console.log(texAmount);
console.log(statusMessage);

// readable table

let numbers: readonly number[] = [100, 200, 300, 400, 500];

console.log(numbers[1]);
