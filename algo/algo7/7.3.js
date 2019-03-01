const readlineSync = require("readline-sync");
let deel
let bool = false;


function findpriem() {
    let x = parseInt(readlineSync.question("zeg een getal"));


for ( i=2 ; i<x ; i++ ){
    deel=x/i;
    if (Number.isInteger(deel)){
        console.log(deel)
        bool = true;
    }
     
}
 if (bool == false){
     console.log("prieeeeeeeeeeeeeeeeem geeeeeeeeeeeeeeeeeeeeetal!")
 }
 bool = false;
 findpriem()
 
}
findpriem()
