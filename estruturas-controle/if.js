//Só irá imprimir no console se a nota for maior que 7
function notaEscolar(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}
notaEscolar(8.1)
notaEscolar(5.8)


//Só irá imprimir
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
