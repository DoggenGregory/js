const readlineSync = require("readline-sync");
let askTvSerie ={
    name:"",
    ProductionYear:"",
    NamesOfTheCastMembers:[]
};

function ask(){
askTvSerie.name = readlineSync.question("Name of serie");
askTvSerie.ProductionYear = readlineSync.question("What is the production name");

do{
    var tussenstap =readlineSync.question("give me the name's of the cast members press enter if you are finnished");
    askTvSerie.NamesOfTheCastMembers.push(tussenstap); 
}
while(tussenstap !== "")}

ask();

console.log(askTvSerie);
console.log(askTvSerie.name);



