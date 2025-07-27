//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital_inicial, taxa_juros, tempo_aplicacao){
    let taxa_j = (taxa_juros/100)
    let montante = capital_inicial * (1 + taxa_j * tempo_aplicacao)
    return montante
}

console.log(jurosSimples(1000, 5, 6))

function jurosCompostos(capital_inicial, taxa_juros, tempo_aplicacao){
    let taxa_j = (taxa_juros/100)
    let montante = (capital_inicial * Math.pow((1 + taxa_j), tempo_aplicacao)).toFixed(2)
    return montante
}

console.log(jurosCompostos(1000, 5, 6))