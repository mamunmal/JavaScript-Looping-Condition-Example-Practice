let a = 5;
let b = 2;
//console.log(a, b);
//a = 5; 
//b = 2;
const temp = a;
a = b;
b = temp;
//console.log(a, b);
// different way defrence 
let x = 10;
let y = 20;
//console.log(x, y);
[x, y] = [y, x];
//console.log(x, y);


// discount shopping parches

const price = 4000;
if(price >= 5000) {
    const discount = price / 100 * 10;
    const pay = price - discount;
    console.log(pay);

}
else if (price >= 2500){
    const discount = price / 100 * 5;
    const pay = price -discount;
    console.log(pay);
}
else{
    console.log(price);
}