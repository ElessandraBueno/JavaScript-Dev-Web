function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

//Para não dar NaN pelo fato do this.preco e this.desc não serem globais, é necessário:
global.preco = 20
global.desc = 0.1
console.log(getPreco())
//Executando a função a partir do objeto
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Call - é necessário passar todos os parametros
console.log(getPreco.call(carro, 0.17, '$'))
//Apply - é necessário passar os parametros dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))