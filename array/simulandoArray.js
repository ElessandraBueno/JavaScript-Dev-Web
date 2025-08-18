const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString)', {
    vale: function () {return Object.values(this)},   
    enumerable: false
})

const meuArray = 'Amanda, Jasmine, Joao'
console.log(quaseArray.toString,)
