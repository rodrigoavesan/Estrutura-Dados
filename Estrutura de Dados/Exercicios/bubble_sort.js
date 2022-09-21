//Exercico do dia 10/03/2022
function sort(vet,fnComp){ 
    var length = vet.length;
    compar = 0
    troca = 0
    for(var i=0; i < length; i++){
        compar++
        for (var t=0;t < (length - i -1); t++ ){
            troca++
            if(vet[t] > vet[t +1]){
                var resul = vet [t];
                vet[t] = vet[t + 1];
                vet[t + 1] = resul;
            }

        }
    }
}

var number = [77,44,22,33,99,55,88,0,66,11];
sort(number)
console.log(number)
console.log('Fez', compar, 'Compareções e',troca, 'troca' )


/*var number = [77,44,22,33,99,55,88,0,66,11];
sort(number);
console.log(number);
console.log(compar);

let compar, trocas
function sort(vet){
    let tro
    compar = 0
    trocas = 0

    do{
        tro = false // tro =troca 
        for(let i = 0;i < vet.length -1; i++) {
            compar++
            if(vet[i] > vet[i+1]){
                [ vet[i], vet[i + 1] ] = [ vet[i + 1], vet[i] ]
                tro = true
                trocas++
            }
        }
    }while(tro)
}
sort(number)
console.log(number)
console.log({compar, trocas})

*/