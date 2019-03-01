const readlineSync = require("readline-sync");

let arr = parseInt(readlineSync.question("lengte array"));
let array =[];

function rand10(){
    a = Math.floor((Math.random() * 10) + 1);
    return a;
}
function multiRand(){


for(i=0; i < arr; i++){
    rand10();
    array.push(rand10());
}
}
multiRand();
console.log(array);
