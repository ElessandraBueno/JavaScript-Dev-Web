let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //o decremento só é feito após a comparação, pela ordem de precedência do JS
console.log(num1 === num2)