//ESCOPO DE BLOCO
{
    {
        {
            {var a = 'variavel dentro do bloco'}
        }
    }
}
console.log(a)

var numero = 1
{
    var numero = 2
    console.log('dentro =',numero)
}
console.log("fora = "+numero)

//ESCOPO DE FUNÇÃO
function teste(){
    var local = 123
}
teste()
console.log(local)


