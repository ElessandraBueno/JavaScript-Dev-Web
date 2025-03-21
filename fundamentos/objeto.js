const prod1 = {};
prod1.nome = "Celular Ultra";
prod1.preco = 4899.90;

prod1['desconto maximo'] = 0.50;

console.log(prod1);

const prod2 = {
    nome: 'camisa polo',
    preco: 78.90
}
console.log(prod2);
console.log('*******************************')

//Instância de função
console.log('Tipo de Object =',typeof Object)
console.log('Tipo de um Object instanciado = '+ typeof new Object)
console.log('          *******')

const Cliente = function(){}
console.log('O tipo da constante Cliente = '+ typeof Cliente)
console.log('O tipo da constante instanciada = '+ typeof new Cliente)
console.log('          *******')

class Produto {}
console.log('O tipo da classe Produto = '+ typeof Produto)
console.log('O tipo da classe instanciada = '+ typeof new Produto)
console.log('*******************************')

