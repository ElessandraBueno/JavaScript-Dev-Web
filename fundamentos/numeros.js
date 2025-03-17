const peso1 = 1.0;
const peso2 = Number('2.0'); // Função que transforma String em Número

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//.isInteger verifica se a váriavel informada entre () é do tipo Inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1+peso2);

console.log(media.toFixed(2)); //.toFixed não altera o valor da variável, apenas ajusta as casas decimais
console.log(media.toString()); //Altera o tipo do resultado para String
console.log(typeof media);

/*ATENÇÃO A ALGUNS DETALHES*/
console.log(7 / 0); //infinito
console.log("10" / 2); //considera a String como número e realiza a divisão
console.log("3" + 2); //pelo fato de começar com uma String e o operador ser o + que é o de concatenação, ele não soma e sim concatena
console.log('5' - 2); //considera a String como número e realiza a subtração
console.log("Show!" * 2); //não repete a String
console.log(0.1 + 0.7); //não retorna 0.8 opr conta da precisão do float
console.log((10.356).toFixed(2)); 
