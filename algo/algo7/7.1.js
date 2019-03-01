const readlineSync = require("readline-sync");

function startGame(){
var random = Math.floor((Math.random() * 100)+1)
var x
while ( x != random ) {
    x = readlineSync.question("zeg een getal tussen 1 en 100");
    console.log(random)
    if ( x > random ){
        console.log("raad lager")

    }else{
        console.log("raad hoger")
    }

    

}
console.log("goed gedaan dit was echt geen weg gegooide tijd van je leven")
startGame();
}


startGame();