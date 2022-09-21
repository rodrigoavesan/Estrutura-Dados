//Exercicio do dia 09/03
const nomes = require('./E:\RO\Faculdade\Estrutura de Dados\EstruturaDeDados-master\EstruturaDeDados-master\nomes-desord.mjs')
const conj = [2, 4, 6, 11, 33, 55, 19];

function sequen(conj,val){
    for(i=0; i<conj.length; i++){
        if(conj[i]==val){
            return i;
        }

    }
    return -1
}
console.log(sequen(conj, 19));
console.log('Posição do Rodrigo', sequen(nomes,'RODRIGO'))

