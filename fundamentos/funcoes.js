//Função sem retorno
function imprimirSoma(a , b){
    console.log(a + b)
}

imprimirSoma(5 , 2)
imprimirSoma(2) //NaN pois o segundo é undefined
imprimirSoma(2, 6, 9, 45, 7) //Considera apenas os dois primeiros e ignora os demais
imprimirSoma()//NaN pois os dois são undefined

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(1, 3))
console.log(soma(2))//Soma pois o segundo valor foi definido como 0