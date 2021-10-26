//8 - Faça um algoritmo que receba um número e retorne se o número é primo ou não.

function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = 10;

for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);