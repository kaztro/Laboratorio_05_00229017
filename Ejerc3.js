function fibonacci(n) {
    return (n == 0 || n == 1) ? n : (fibonacci(n-1) + fibonacci(n-2));
}

console.log(fibonacci(prompt("Ingresa un numero entero")));