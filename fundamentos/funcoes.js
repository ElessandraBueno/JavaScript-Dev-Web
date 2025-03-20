console.log('*********Função sem retorno*********')
function imprimirSoma(a , b){
    console.log(a + b)
}
imprimirSoma(5 , 2)
imprimirSoma(2) //NaN pois o segundo é undefined
imprimirSoma(2, 6, 9, 45, 7) //Considera apenas os dois primeiros e ignora os demais
imprimirSoma()//NaN pois os dois são undefined


console.log('********Função com retorno********')
function soma(a, b = 0){
    return a + b
}
console.log(soma(1, 3))
console.log(soma(2))//Soma pois o segundo valor foi definido como 0


console.log('********Armazenando uma função em váriavel********')
const printSoma = function (c, d){
    console.log(c + d)
}
printSoma(5, 1)

console.log('****Armazenando uma função arrow em uma variável****')
const soma1 = (e, f) => {
    return e + f
}
console.log(soma1(7, 1))

console.log('********Retorno implícito*********')
const subtracao = (g, h) => g - h
console.log(subtracao(5, 3))