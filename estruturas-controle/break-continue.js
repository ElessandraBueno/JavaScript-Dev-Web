const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

/*Definindo rótulo*/
externo: for(a in nums){
    for(b in nums){
        if(a==2 && b==3){
            break /*Interrompe apenas o FOR interno e continua com o FOR externo*/
        }
    }
}

/*Definindo rótulo*/
extern: 
for(c in nums){
    for(d in nums){
        if(c==5 && d==2) {
            break extern /*Interrompe o FOR inteiro que está rotulado como extern*/
        }
        console.log(`Par = ${c},${d}`)
    }
}