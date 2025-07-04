function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Ana'
MeuObjeto.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome}!`)
}

obj1.falar()
console.log(obj1.nome)

obj2.nome = 'Maria'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Objeto 3'
obj3.falar()
