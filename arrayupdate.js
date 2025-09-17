/* Practics Problem-1
You given an array:---->> var fruits = [apple, banana, orange]
1. find the index of banana and replase banana with mango
2. remove orange and add watermelon.
*/
var fruits  = ['apple', 'banana', 'orange', 'lichi'];
// find the index banana
var bananaIndex = fruits.indexOf('banana');
//console.log(bananaIndex);
// replase banana to mango
fruits[bananaIndex] = 'mango'
//console.log(fruits);
// remove to last element lichi
fruits.pop();
//console.log(fruits);
// add to watermelon
fruits.push('watermelon');
//console.log(fruits);


/* Practics Problem -2

You and your friends Tom, Janes, Peter and John got their final exam results. Your total score is 85, Tom's total
score is 90, Janes total score 66, Peter's total score is 56 and john's total score is 40. The grading 
chart is :
        80 or above A grade 
        60 or above B grade 
        50 or above C grade
        40 or above D grade 
        39 or above F grade
 ---->> Write a program to find your and your friends grades using if-else
 */
var JanesScore = 66;
var PeterScore = 56;
var johnScore = 40;

 


 /*
 1. You are given three numbers 13, 79, and 45. write a program that will print the largest number 
    using if-else.

 */
var num1 = 83;
var num2 = 200;
var num3 = 45;
 if(num1 > num2){
    if(num1 > num3){

        console.log(num1);
    }
    else{
        console.log(num3);

    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

/*
2. You are given a  triangle with the side 9, 8, 9. Write a program to check whether a triangle
 is Isosceles or not using if-else.

 Isosceles => two sides are equal.

*/

 var side1 = 9;
var side2 = 8;
var side3 = 8;

if(side1 == side2 || side1 == side3 || side2 == side3){

    console.log('Isosceles');
}
else{
    console.log('Is not Isosceles');
}