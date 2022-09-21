//Exercicio do dia 03/03/2022
function buscabi(valb,vetor){
    let min = 0
    let max = vetor.length - 1
    while(max >= min ){
        let sol = Math.floor((min+ max)/2)
       if(valb === vetor[sol]){
           return sol
        }
        else if(valb > vetor[sol]){
            min = sol+1
        }
        else{
            max = sol-1
        }

    }
    return -1
}
let array = [0,11,22,33,44,55,66,77,88,99]
console.log('Posição de 22: ', buscabi(22,array))