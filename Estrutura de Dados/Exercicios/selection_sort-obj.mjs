//Tarefa realizada dia 24/03/22


//let objM =  [77,44,22,33,99,55,88,66,0,11] //[5,2,4,6,1,3] 

function selectSort_obj(vet,fnComp){

    for(let posSel = 0; posSel < vet.length -1; posSel++){
        let posMenor = posSel + 1  
        for (let i = posMenor + 1; i < vet.length; i++ ){
            if(fnComp(vet[posMenor] , vet[i])){
                posMenor = i
            }
        }   
        if(fnComp(vet[posSel] , vet[posMenor])){
          [vet[posSel], vet[posMenor]] = [vet[posMenor] , vet[posSel]]
        }
    }


}
import  {objMotoristas} from './motoristas-obj-desord.mjs'


selectSort_obj(objMotoristas,(elem1,elem2) => {''           
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }else return elem1.razao_social > elem2.razao_social
})    //ordenar por razao social, com desempate em nome do motorista

// selectSort_obj(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista )  // outra forma de fazer  mais simples SEM ter um fator externo
console.log(objMotoristas)