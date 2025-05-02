function area(largura,altura){
    const area_obj = largura * altura
    if(area_obj > 20){
        console.log(`Valor acima do permitido: ${area_obj}m2`)
    }
    else{
        return area_obj
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 8, 15))
console.log(area(5,5))



