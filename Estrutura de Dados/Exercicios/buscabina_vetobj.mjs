//Exercicio do dia 09/03/2022
function vet_obj (vetor,fnComp){ // fnComp dentro do paremetro
    let min = 0;
    let max = vetor.length -1;

    while(max >= min ){
        let sol = Math.floor((min+ max)/2);
        
        switch(fnComp(vetor[meio])){
            case 0:
                return sol
            case 1:
                min = sol + 1
                break
            default:
                max = sol - 1
            
        }
       
    }
   return -1 
}
import {objNomes} from  'C:\Users\Rodrigo\Documents\RO\Faculdade\Estrutura de Dados\vetor-obj-nomes.mjs'

function comparar(val_sol,val_bus = 'RODRIGO'){
    if(val_bus === val_sol.first_name) return 0
    else if (val_bus > val_sol.first_name) return 1
    else return -1
}

console.log('Posição de Rodrigo : ', vet_obj (objNomes, array));
