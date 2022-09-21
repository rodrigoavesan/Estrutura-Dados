function venda(quant, codigo){
    switch(codigo){
        case 100:
            return quant * 3
        case 200:
            return quant * 4
        case 300:
            return quant * 5.5
        case 400:
            return quant * 7.5 
        case 500:
            return quant * 3.5
        case 600:
            return quant * 2.8  
        default:
            return 'Esse produto não existe '                                              
    }

}

console.log(venda(100,2))
console.log(venda(200,2))
console.log(venda(300,2))
console.log(venda(400,2))
console.log(venda(500,2))
console.log(venda(600,2))
console.log(venda(111,2))"