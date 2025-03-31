//Só irá imprimir no console se a nota for maior que 7
function notaEscolar(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}
notaEscolar(8.1)
notaEscolar(5.8)


//Só irá imprimir se o valor for considerado true
function soVerdade(valor){
    if(valor){
        console.log('É verdade que...' + valor)
    }
}
soVerdade() //false
soVerdade(null) //false
soVerdade(undefined) //false
soVerdade(NaN) //false
soVerdade(0) //false
soVerdade(-1) //true
soVerdade(' ') //true
soVerdade('?') //true
soVerdade([]) //true
soVerdade([1, 2]) //true
soVerdade({})
soVerdade(true)
soVerdade(false)

//Se utilizar o IF sem as chaves, só pode haver uma linha de código e as sentenças precisam ser separadas por vírgula
function teste1(num){
    if(num > 7)
        console.log(num) ; console.log('final')
}
teste1(6)
teste1(8)

//Da forma como está o trecho abaixo, a segunda setença não está dentro do IF, por isso ela é executado duas vezes
function teste2(num1){
    if(num1 > 7)
        console.log(num1)
        console.log('final')
}
teste1(6)
teste1(8)

//O ; antes das chaves faz com que o IF seja uma sentença vazia e o bloco de código entre chaves não tem nenhuma ligação com o IF
function teste3(num2){
    if(num2 > 7)
        ;
    {
        console.log(num2)
    }
}
teste3(9)
teste3(1)

