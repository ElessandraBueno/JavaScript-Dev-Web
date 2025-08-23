//Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário no mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.

function calculaSalario(horas, valorHora){
    return `Salário igual a R$${horas * valorHora}.`
}
console.log(calculaSalario(184, 11.5))