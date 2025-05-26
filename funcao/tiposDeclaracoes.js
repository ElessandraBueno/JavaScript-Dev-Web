//Function declaration - é possível chamá-la antes de ser declarada no código
console.log(soma(3, 4))

function soma(x, y){
    return x + y
}

//Function expression - NÃO é possível chamar a função antes da sua declaração no código
console.log(sub(3, 4))

const sub = function (x, y){
    return x - y
}

//Named function expression - NÃO é possível chamar a função antes da sua declaração no código
console.log(multip(3, 4))

const mult = function multip(x, y){
    return x * y
}


