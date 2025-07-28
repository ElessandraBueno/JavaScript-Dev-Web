// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function mediaNota(codAluno, nota1, nota2, nota3){
    let notas = []
    let p1 = 4
    let p2 = 3
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    //ordenando o array em  ordem decrescente
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * p1 + notas[1] * p2 + notas[2] * p2)/ (p1 + p2 + p2)

    console.log(`Código do aluno: ${codAluno} \nNotas: ${nota1}, ${nota2}, ${nota3} \nSituação: ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)

}

mediaNota(123, 2.8, 6, 3.5)

