/*
first100-----> 100
1000 to 200 ----> 90
above200 -----> 70
*/
function layeredDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 200;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuatity = quantity - 100;
        const remainingTotal = remainingQuatity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuatity = quantity - 200;
        const remainingTotal = remainingQuatity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}