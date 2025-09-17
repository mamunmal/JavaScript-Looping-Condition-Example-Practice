const number = [300, 200, 500, 700, 600];



const products = [
     {Name: 'shampoo', price: 300 },
     {Name: 'shirt', price: 200 },
     {Name: 'saban', price: 500 },
     {Name: 'mutton', price: 700 },
     {Name: 'brief', price: 600 },

]

function getShoppingTotal(products){
    //let total = 0;
    for(const product of products){
        //total = total + product.price;
        console.log(product);
    }
    //return total;
}
const total = getShoppingTotal(products);
console.log('ajke total item kotoy =',total);
