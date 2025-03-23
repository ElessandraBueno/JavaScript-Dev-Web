// recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua dois',
        numero: 145
    }
}

//destructuring direto
const { nome, idade} = pessoa
console.log(nome, idade)

//destructuring renomeando as variáveis
const { nome: n, idade: i} = pessoa
console.log(n, i)

//destructuring buscando variável não declarada
const {sobrenome, maiorIdade = false} = pessoa
console.log(sobrenome, maiorIdade)

//destructuring buscando objeto dentro de objeto
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//DESTRUCTURING COM ARRAY

console.log('****************************')
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)