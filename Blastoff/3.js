//3 - Dados três números (a, b, c), faça um algoritmo para mostrar o menor número

var num1 = 1;
var num2 = 2;
var num3 = 3;

if (num1 < num2 < num3){
    console.log("O menor numero é " + num1);
}else if (num1 < num3 < num2){
    console.log("O menor numero é " + num1);
}else if (num2 < num1 < num3){
    console.log("O menor numero é " + num2);
}else if (num2 < num3 < num1){
    console.log("O menor numero é " + num2);
}else if (num3 < num1 < num2){
    console.log("O menor numero é " + num3);
}else if (num3 < num2 < num1){
    console.log("O menor numero é " + num3);
}
