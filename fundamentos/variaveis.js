//ESCOPO DE BLOCO
{
    {
        {
            {var a = 'variavel dentro do bloco'}
        }
    }
}
console.log(a)

//ESCOPO DE FUNÇÃO
function teste(){
    var local = 123
}
teste()
console.log(local)