let dobro = function(a){
    return 2 * a
}

//Arrow Function
dobro = (a) => {
    return 2 * a
}

//Arrow Function com 1 parametro e return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function(){
    return 'olá'
}
ola = () => 'olá'
console.log(ola())