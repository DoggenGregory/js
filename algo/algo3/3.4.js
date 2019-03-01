var arr=[3,5,6,80,1,2];
var min =arr[0];
var max =arr[0];

for(i=0; i < arr.length ; i++){
    if (min < arr[i]){
        min = arr[i];
    }

    if (max > arr[i]){
        max = arr[i];
    }
}
console.log(min);
console.log(max);