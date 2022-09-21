//Exercicio feito no dia 16/03/202

function busca_moto(vet,fnComp){
    let tro
    do{
        tro = false // tro =troca 
        for(let i = 0;i < vet.length -1; i++) {
            if(fnComp(vet[i] , vet[i+1])){
                [ vet[i], vet[i + 1] ] = [ vet[i + 1], vet[i] ]
                tro = true
                
            }
        }
    }while(tro)
}
import {objMotoristas} from './motoristas-obj-desord.mjs'

//console.log(busca_moto(objMotoristas, (valcomp, valcomp2) => valcomp.nome_motorista > valcomp2.nome_motorista)) // => é uma forma de fazezer uma função direta e mais curta 
 
busca_moto(objMotoristas,(elem1,elem2) => {
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }else return elem1.razao_social > elem2.razao_social
})
console.log(objMotoristas)

