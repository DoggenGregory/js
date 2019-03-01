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



//verdeel de array door hem binnen te halen item per item en hem op een van de random plaatsen te zetten met controllen dat er geen 2 dubble zijn
/* function schuffel(array){
   let a = array.lenght
   

    for(i=0; i < a; i++){
        let x = Math.floor(Math.random() * a);
        let y = array[x];
        array.splice(x);
        array.push(y);
    
}}
var greg=["ioj","ijoh","iojoihougfu","uhiuhigio"]
schuffel(greg);  
console.log(greg); */



function shuffle(array1) {
    var ctr = array1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = array1[ctr];
        array1[ctr] = array1[index];
        array1[index] = temp;
    }
    return array1;
}



//////////////////////////////////////////////////askTvSerie.NamesOfTheCastMembers
shuffle(askTvSerie.NamesOfTheCastMembers);
console.log(askTvSerie);




