console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[3])
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados [2])

aprovados = ['Bia', 'Carlos', 'Ana']
//removendo elemento
aprovados.splice(1, 1)
console.log(aprovados)
//substituindo elemento
aprovados.splice(2, 1, 'Elemento substituto')
console.log(aprovados)
//adicionando elemento sem excluir ou substituir
aprovados.splice(1, 0, 'Elemento adicional')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//excluindo e adicinoando mais elementos
aprovados.splice(1, 1, 'Elemento substituto', 'Elemento adicional')
console.log(aprovados)
