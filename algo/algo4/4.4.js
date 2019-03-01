const readlineSync = require("readline-sync");

let question = parseInt(readlineSync.question("lengte array"));
let arr =[];

function rand10(){
    return Math.floor((Math.random() * 10) + 1);

}
function multiRand(){


for(i=0; i < question; i++){
    rand10();
    arr.push(rand10());
}
}
multiRand();



let min = arr[0];
let max = arr[0];
let average = arr[0];
num=arr[0];





function minF(){
    for(i=0; i < arr.length ; i++){
        if (min < arr[i]){
            min = arr[i];
        }
}}
function maxF(){
    for(i=0; i < arr.length ; i++){
        if (max > arr[i]){
            max = arr[i];
            
        }
}}

function averageF(){
    
    for(i=0; i < arr.length ; i++){
          num = num + arr[i];
        }
        average = num /arr.length;
}

minF();
maxF();
averageF();

console.log(arr);
console.log(min);
console.log(max);
console.log(average);

