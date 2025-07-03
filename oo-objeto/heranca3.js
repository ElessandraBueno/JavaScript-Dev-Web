const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filho = Object.create(pai)
filho.nome = 'Ana'
console.log(filho.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filho2)
filho2.nome = 'Carla'
console.log(filho2)

console.log(Object.keys(filho))
console.log(Object.keys(filho2))

for(let key in filho2){
    filho2.hasOwnProperty(key)?
        console.log(key) : console.log(`Por herança: ${key}`)
}
