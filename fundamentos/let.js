//ESCOPO BLOCO COM LET
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Não pode ser utilizada fora do escopo de bloco
{
    let numero1 = 2
    console.log('dentro =', numero1)
}
console.log('fora =', numero1)

//Não pode ser utilizada fora do escopo de função
function a(){
    let teste = 3;
}
a()
console.log(teste)