//Atribuição por referência
console.log('*************************')
console.log('Atribuição por referência')

const a = {nome: 'Ana'}
console.log(a)

const b = a
console.log(b)

b.nome = 'Maria'
console.log(a)

//Copia por valor
console.log('*************************')
console.log('Copia por valor')
let c = 3
console.log(c)

let d = c
console.log(d)

d++
console.log(d)

//Null e Undefined
console.log('*************************')
console.log('Null e Undefined')

let valor //não inicializada - undefined
console.log(valor)

valor = null //ausência de valor (não aponta para nenhum local de memória)
console.log(valor)




