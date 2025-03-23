//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Olaaaa' //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Ana',
    idade: 32,
    peso: 70,
    endereco:{
        logradouro: 'Rua Treze',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)