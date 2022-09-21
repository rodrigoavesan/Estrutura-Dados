//Exercicio do dia 24/02/2022
const objNomes = require('./vetor-obj-nomes.mjs')

function buscSequenc (vetor,fnComp,Bus){
    for(let i=0; i < vetor.length; i++){
        if(fnComp(vetor[i], Bus))
        return i
    }
    return -1
}

function comparName (obje,Bus){
    return obje.first_name === Bus
}

console.log('Posição De Zuzi', buscSequenc(objNomes, comparName, 'ZUZI'))

// E:\RO\Faculdade\Estrutura de Dados\vetor-obj-nomes.mjs