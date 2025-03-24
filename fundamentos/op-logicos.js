function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTV50 = trab1 && trab2
    // const comprarTV32 = !!(trab1 ^ trab2) //bitwise xor
    const comprarTV32 = (trab1 != trab2)
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

//TABELA VERDADE -

/*E (só é verdade se os dois forem verdadeiros)
V e V = V
F e V = F
V e F = F
F e F = F*/

/*OU (se for verdade em pelo menos um dos lados o resultado é verdadeiro)
V ou F = V
F ou V = V
V ou V = V
F ou F = F*/

/*OU EXCLUSIVO (xor - os dois precisam ser diferentes para ser verdadeiro)
V ou V = F
V ou F = V
F ou V = V
F ou F = F*/

/*NEGAÇÃO LÓGICA
!V = F
!F = V*/