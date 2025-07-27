//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoA == ladoC){
        return `Triângulo equilátero: \nLado A: ${ladoA} \nLado B: ${ladoB} \nLado C: ${ladoC}`
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        return `Triângulo isósceles: \nLado A: ${ladoA} \nLado B: ${ladoB} \nLado C: ${ladoC}`
    } else{
        return `Triângulo escaleno: \nLado A: ${ladoA} \nLado B: ${ladoB} \nLado C: ${ladoC}`
    }
}
console.log(triangulo(2,5,6))
console.log(triangulo(2,2,2))
console.log(triangulo(5,5,6))
