//Função em JS é First-class Object (citizens)
//Higher-Order Function

//Criando de forma literal
function fun1(){
//se uma função não retornar nada, sempre será undefined
}

//Armazenar em uma variável
const fun2 = function (){

}

//Armazenar em um array
const array = [
    function (a,b){return a+b}, 
    fun1, 
    fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

//Função como parametro
function run(teste){
    teste()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(5)
const teste2 = soma(2,3)
teste2(4)