//Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retonro da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

function inverso(entrada) {
    if (typeof entrada === "boolean") {
        return !entrada
    } else if (typeof entrada === "number") {
        return -entrada
    } else {
        return `Era esperado um valor do tipo booleano ou numérico, mas foi inserido um valor do tipo ${typeof entrada}`
    }
}

console.log(inverso(2))
console.log(inverso(true))
console.log(inverso("2"))