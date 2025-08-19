const nums = [1, 2, 3, 4, 5]

//MAP - Faz alterações em cada um dos elementos do array e cria um outro array com as alterações, sem modificar o array original
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
