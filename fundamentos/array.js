const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);
console.log(valores);
console.log(valores.length); //conta quantos índices tem no array

valores.push({id: 3}, false, null, 'teste'); //inclui um elemento no array
console.log(valores);

console.log(valores.pop()); //retira o último elemento do array
delete valores[0]; //deleta o elemento do índice 0
console.log(valores);

console.log(typeof valores);