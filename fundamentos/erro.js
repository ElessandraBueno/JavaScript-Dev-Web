function tratarErroElancar(erro){
    // throw new Error('TESTE DE ERROOO...')
    // throw 15
    // throw TRUE
    // throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroElancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)