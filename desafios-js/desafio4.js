//Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "Fevereiro", pois este é o 2º mês.

function mesAno(mes) {
    let mesExtenso
    switch (mes) {
        case 1:
            mesExtenso = "Janeiro"
            break
        case 2:
            mesExtenso = "Fevereiro"
            break
        case 3:
            mesExtenso = "Março"
            break
        case 4:
            mesExtenso = "Abril"
            break
        case 5:
            mesExtenso = "Maio"
            break
        case 6:
            mesExtenso = "Junho"
            break
        case 7:
            mesExtenso = "Julho"
            break
        case 8:
            mesExtenso = "Agosto"
            break
        case 9: 
            mesExtenso = "Setembro"
            break
        case 10:
            mesExtenso = "Outubro"
            break
        case 11:
            mesExtenso = "Novembro"
            break
        case 12:
            mesExtenso = "Dezembro"
            break
        default:
            mesExtenso = "Mês inválido"
    }
    return mesExtenso
}

console.log(mesAno(5))
console.log(mesAno(1))
console.log(mesAno(12))