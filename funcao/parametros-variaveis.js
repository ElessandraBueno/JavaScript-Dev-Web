function soma(){
    let soma_var = 0
    for(i in arguments){
        soma_var += arguments[i]
    }
    return soma_var
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1, 5, "teste"))
console.log(soma('a', 'b', 'c'))