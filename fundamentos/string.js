const escola = "Coder";

console.log(escola.charAt(4));//.charAt retorna o valor que está no índice especificado

console.log(escola.charCodeAt(3));//.charCodeAt retorna o valor Unicode que corresponde ao caractere que está na posição indicada

console.log(escola.indexOf('o')); //.indexOf retorna o índice/posição do caractere indicado

console.log(escola.substring(1));
console.log(escola.substring(1,4));//.substring retorna parte da String começando no índice indicado e terminando 1 antes do indicado ou se for especificado apenas o índice inicial, ele retorna até o final da String

console.log('Curso '.concat(escola).concat("!"));
console.log(escola.replace('C', 'e'));//substitui uma String por outra

let a = "ola1234";
console.log("A String "+a+" tem o primeiro número substituído: "+a.replace(/\d/, 'O'));
//a expressão /\d/ substitui o PRIMEIRO número incluído na String

console.log("A String "+a+" tem todos os números substituídos: "+a.replace(/\d/g, 'A'));
//a expressão /\d/g (flag g de global) substitui TODOS os números incluídos na String 

console.log("A primeira letra de "+a+" é substituída por: "+a.replace(/\w/, 'PE'));
// a expressão /\w/ substitui a PRIMEIRA letra da String

console.log("Todos os caracateres de "+a+" são substituídos por: "+a.replace(/\w/g, 'U'));
// a expressão /\w/g (flag g de global) substitui TODAS os caracteres da String

console.log("Ana, Maria, Pedro".split(','));// Divide uma String em uma lista de substrings, coloca essas substrings em um array e retorna o array.