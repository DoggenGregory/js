const readlineSync = require("readline-sync");

var age = readlineSync.question("wat is you age")

console.log((age*2+5)*50-(2019-age)+1766)

console.log(2+2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const readlineSync = require("readline-sync");

var age = readlineSync.question("wat is you age")


if (age>18){
    console.log("you are a adult");
}else{
        console.log("You are not yet an adult");
    }
    console.log("");

///////////////////////////////////////////////////////////////////////////////////////////////////////


    const readlineSync = require("readline-sync");
    var i = 0;


    while(i < 100){
        i++;
        let a = i/2;
        if (a == Math.floor(a)){
            console.log(i/2);
        }else{
            console.log(i*3);
        }
    }

 /////////////////////////////////////////////////////////////////////////////////////////////
const readlineSync = require("readline-sync");

var i = 0;
function greg(){


if (i==42){
    console.log("Are you sure?");
    
}else{
    i = readlineSync.question("give a number");

    console.log("hell yeah baby!!!");
    greg();
}
}
greg();
////////////////////////////////////////////////////////////////////////////////////////
const readlineSync = require("readline-sync");
i = parseInt(readlineSync.question("give a number"));
i--;


var day = ["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"]

console.log(day[i]);
day[1];

///////////////////////////////////////////////////////////////////////////////////////:

const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("give a number"));
let num = 0; 

while (n > 0) {
    i = parseInt(readlineSync.question("give a number"));
    num =num + i;
    n = n - 1;
  }

  console.log(num);
  num;