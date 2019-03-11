
var array1 = [2,79,9,0,565,34,56];
var array2 = [2,43,9,35,56,35,766];
var array3 = [2,794,9,333,23,34,523];
var arr = []
var maxArr = 0
var newArr = []



function arraySort(array){
    
    if (array.length <= 1){
        newArr.push(array[0])
        array = newArr;
        newArr=[];
        console.log(array)

    }else{
        arr = array;
        arrayMax();
    }
}

function arrayMax(){
    
        for(i=0;i<arr.length;i++){
        
        if (maxArr < arr[i]){
            maxArr = arr[i];
            
        }else{
            
        }

    }


    newArr.push(maxArr);
    //array name delet dont need iDel//
    arr.splice(arr.indexOf(maxArr), 1 );
    maxArr = -9999999999999;
    arraySort(arr);


}
console.log("///////////////////////////////////////////////////////////////////////")
console.log(array1)
arraySort(array1)
console.log("///////////////////////////////////////////////////////////////////////")
console.log(array2)
arraySort(array2)
console.log("///////////////////////////////////////////////////////////////////////")
console.log(array3)
arraySort(array3)







    
    