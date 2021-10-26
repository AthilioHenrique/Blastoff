//11 - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a intersecção das listas

const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 5, 8];
const intersection = a1.filter(i => a2.includes(i));
console.log(intersection); 