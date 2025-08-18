const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove o último elemento do array
pilotos.pop() 
console.log(pilotos)

//Insere um elemento no array (no final)
pilotos.push('Verstappen')
console.log(pilotos)

//Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//Insere um elemento no índice 0 do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//SPLICE - pode adicionar ou remover elementos
//Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Removendo
pilotos.splice(3, 1)
console.log(pilotos)

//Cria um novo array a partir do índice indicado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2)
