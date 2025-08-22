const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (elemento1, elemento2) => elemento1 && elemento2
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum dos alunos é bolsista?
const algumBolsista = (bolsista1, bolsista2) => bolsista1 || bolsista2
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))