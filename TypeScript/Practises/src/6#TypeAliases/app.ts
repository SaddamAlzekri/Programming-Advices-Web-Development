type UserID = string | number;

let UserID1 : UserID = 101;
let UserID2 : UserID = "USR-101";

console.log(`UserID1 : ${UserID1}, UserID2 : ${UserID2}`);

type ProductInfo = {
    readonly id:number,
    title:string,
    price:number,
    isAvailable:boolean
};

const laptop: ProductInfo = {
    id: 1,
    title: "MacBook Pro",
    price: 2000,
    isAvailable:true
};

//Error
//laptop.id = 101;
laptop.price = 1500;

console.log(laptop.price);
