function Ordenar (a){ 
    for(var i = 0; i <  a.length; i++){ 
        for(var j = 0; j<  a.length -1; j++){ 
             if( a[j+1] <  a[j]){ 
                var aux =  a[j+1]; 
                 a[j + 1] =  a[j]; 
                 a[j] = aux; 
            }        
        } 
    } 
    return a; 
} 

console.log("El original: [" + [100,22,53,54,5,9,4050,10,2] + "]");
console.log(Ordenar([100,22,53,54,5,9,4050,10,2])) 
