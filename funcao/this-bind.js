const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//bind - cria uma nova função vinculada onde o THIS é especificado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Teste(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}//sem o bind, a função retorna NaN pois o this não seria o de dentro do setInterval

new Teste

//Outra forma de realizar a ação acima 
function Teste1(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}//sem o bind, a função retorna NaN pois o this não seria o de dentro do setInterval
new Teste1