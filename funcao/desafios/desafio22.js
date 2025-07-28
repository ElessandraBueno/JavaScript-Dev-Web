// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


function anuidade(mes, valor){
    let taxa = 0.05

    if(mes > 0 && mes < 13){

        if( mes != 1){
            return (valor * ((1 + taxa)**(mes - 1))).toFixed(2)
        } else{
            return valor
        }

    }else{

        return `Mês inválido`

    }

    
}

console.log(anuidade(1, 100))
console.log(anuidade(2, 100))
console.log(anuidade(3, 100))
console.log(anuidade(15, 100))