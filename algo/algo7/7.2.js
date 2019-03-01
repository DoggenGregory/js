
const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("zeg een getal"));
 
let array=[];
let x = 0;
let terug = 1

for (i=0;i<1000;i++){
    
    array.push(x)
    x = terug;
    terug = x + array[i]
   
}
console.log(array[n])
console.log(array[n-1])
console.log(array[n+1])
