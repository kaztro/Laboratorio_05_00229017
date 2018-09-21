function Biciesto(a) {
    return (a%4 == 0 && a%100 != 0 || a%400 == 0) ? "Es biciesto" : "No es biciesto";
}

console.log(Biciesto(prompt("Dame un aneo")));