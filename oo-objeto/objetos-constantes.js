// pessoa => endereço de memória -> {objeto}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria'

