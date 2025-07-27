//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function restoDivisao(dividendo, divisor){
    console.log(`O resultado de ${dividendo} dividido por ${divisor} é: ${Math.floor(dividendo/divisor)}`)
    console.log(`O resto da divisão é: ${dividendo % divisor}`)
}

restoDivisao(10, 3)