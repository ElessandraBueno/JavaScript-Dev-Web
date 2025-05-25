function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa


//O this de uma Arrow Function é sempre o que está associado ao contexto em que a função foi escrita. Ele não pode ser alterado, nem mesmo com o bind.
let comparaComThis = function (paramet){
    console.log(this === paramet)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = parametr => console.log(this === parametr)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)