function toBinario(a) {
        return (a < 1) ? "" : toBinario((a - (a%2))/2)+ a%2; 
}
console.log(toBinario(prompt("Ingresa un decimal xd")));
