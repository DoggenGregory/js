const readlineSync = require("readline-sync");
var array = []
var cheat=0


function thePizzaDream(){
console.log("") ;

console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program");
console.log("") ;


let x = parseInt(readlineSync.question("Enter your action's number:"));

if (x==1){

    console.log(array);
    thePizzaDream();



}else if (x==2){
    array.push(readlineSync.question("add pizza flavor"))
    thePizzaDream()


}else if (x==3){
            console.log(array);
            cheat = (readlineSync.question("Enter pizza you want to remove:"));

    for (i=0;i < array.length;i++){
            console.log(cheat + array[i]);

        if(cheat == array[i]){
            array.splice( array.indexOf(cheat), 1 );
            
        }else{
    }}
    thePizzaDream();


}else if (x==4){
    console.log("Exiting this program");

    
}else{

    console.log("kies eens een fansoenlijk antwoord !?!") ;
    console.log("") ;
    thePizzaDream();

}


}
thePizzaDream();