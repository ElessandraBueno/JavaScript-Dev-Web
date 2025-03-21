for(var i = 0; i <10; i++){
    console.log(i)
}
//o valor de i é o valor no qual fez ele parar o laço, ou seja, 10
console.log('i =', i)


//VAR não tem escopo de função
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()