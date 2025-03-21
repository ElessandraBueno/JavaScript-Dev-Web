//ESCOPO BLOCO COM LET
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Não pode ser utilizada fora do escopo de bloco
// {
//     let numero1 = 2
//     console.log('dentro =', numero1)
// }
// console.log('fora =', numero1)

//Não pode ser utilizada fora do escopo de função
// function a(){
//     let teste = 3;
// }
// a()
// console.log(teste)


//
const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()