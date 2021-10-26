//5 - Faça um algoritmo para apresentar se dois números são múltiplos.

for (var x=1; x <= 10; x++){
    var skip = 0;
    if (x % 3 == 0) {
        console.log("Esses numeros são multiplos " + x);
        skip = 1;
    }
}