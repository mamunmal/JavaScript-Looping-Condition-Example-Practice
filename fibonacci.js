/* const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,n144, 233, 377]
fibo[3] = fibo[2] + fibo1[1]
fibo[30] = fibo[29] + fibo[28]
fibo[450] = fibo[449] + fibo[448]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/
const fibo = [0, 1];
for(let  i = 2; i<= 20; i++){

    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);