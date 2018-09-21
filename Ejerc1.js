 function Palindromo() {
     let palabra = prompt("Ingrese la palabra");
     palin = palabra.split().reverse().join();
     if(palin == palabra) {
         console.log("verdadero");
     }
     else console.log("falso");
 }

 Palindromo();