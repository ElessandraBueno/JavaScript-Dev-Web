let contador = 1;
while(contador <= 10){
    console.log(`contador = ${contador}`);
    contador++;
}

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i = 0; i < notas.length; i++){
    console.log(`Nota = ${notas[i]}`);
}

/**********FOR IN**********/
const notas1 = [6.7, 7.4, 9.8, 7.7];
for(let i in notas1){
    // console.log(`índice = ${i}`);
    console.log(`valor do índice ${i} = ${notas[i]}`);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Bueno',
    idade: 30,
    peso: 59
}

for(let atrib in pessoa) {
    console.log(atrib);
    console.log(`${atrib} = ${pessoa[atrib]}`);
}

