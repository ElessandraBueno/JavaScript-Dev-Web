//ESCOPO BLOCO COM LET
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

{
    let numero1 = 2
    console.log('dentro =', numero1)
}
console.log('fora =', numero1)