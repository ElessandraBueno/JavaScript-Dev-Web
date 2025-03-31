function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 5

do{
    opcao = getInteiroAleatorioEntre(-5, 15)
    console.log(`O valor é ${opcao}`)
} while(opcao != 5)
    
console.log('Fim!')