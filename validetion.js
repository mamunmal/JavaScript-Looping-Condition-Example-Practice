//calact the user valide data check
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provider a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply (6, 4);
//console.log(result);
function fullName(first, second){
    if(typeof first !== 'string'){
        return ' First Name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName('Akram', 'Hossain');
//console.log(full);
// define object
function getPrice(product){
    // check the type of object or parameter
    if(typeof product!== 'object'){
        return 'Please provider an object.'
    }
    const price = product.price;
    return price;
}
// this is object decalar
//const price = getPrice({name: 'cholkanir molom', price: 50, color: 'Green'})
//fondit keo jodi any data given
const price = getPrice(5);

//console.log(price);
//jodi keo array deay tohole kicho akta jamela hobe
function getSecond(numbers){
    // array define and check
    if(Array.isArray(numbers) === false){
        return ' Please provide an array.'
    }
    const second = numbers[2];
    return second;
}
const second = getSecond([20, 30, 90]);
console.log(second);