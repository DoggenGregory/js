

function calcDistance (x1,y1,x2,y2){

    let x = x1 - x2;
    let y = y1 - y2;
    let d = (Math.pow(x,2))+(Math.pow(y,2));
     d = Math.sqrt(d,2); 
     console.log(d)

 }
calcDistance(1,1,2,2);
calcDistance(1,1,3,1);
calcDistance(4,1,1,1);
calcDistance(-2,2,2,-2);







/* 
Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
 */