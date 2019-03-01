

let calcSurface =(lengte,widht)=>{
    const readlineSync = require("readline-sync");
    
    lengte =parseInt(readlineSync.question("lengte"));
    widht =parseInt(readlineSync.question("widht"));

    
   
    let surfes= lengte*widht ;
    console.log("serfus"+surfes);

}

calcSurface();
