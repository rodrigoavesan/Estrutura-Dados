//Tarefa realizada dia 30/03/2022
function fatorial(n){
    res = 1
    for(i=n; i > 1; i--){
        res = res *i
        
    }
    return res
}
console.log("O fatorial de 11 é",fatorial(11))

// readline é tipo um input ou prompt só que no javascript
//n*n-1
//console.log(prompt("Insira o numero que quer fazer o fatorial:"))
