function Pontuacao(string){
    const res = string.split(' ');
    let menor = res[0];
    let maior = res[0];
    let menorPont = 0;
    let recorde = 0;
    for(i = 1; i < res.length; i++){
        if(Number(res[i]) > Number(maior)){
            recorde++;
            maior = res[i];
        }
        if(Number(res[i]) < Number(menor)){
            menorPont = i+1;
            menor = res[i];
        }
    }
    ret = [recorde, menorPont]
    return ret;
}
console.log(Pontuacao("10 20 20 8 25 3 0 30 1"));