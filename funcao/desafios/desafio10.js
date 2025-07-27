//10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function num(a){
    if(a % 3 == 0){
        return true
    } else {
        return false
    }
}
console.log(num(3))
console.log(num(5))
console.log(num(12))
