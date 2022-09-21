function exer2(a,b,c){
   
    if (a == b & b == c){
        console.log("Triangulo Equilatero")
    }else if((a == b & b != c || a  != b & b == c || a != b & b == c )) {
         console.log("Triangulo Isoceles")
    }else{
        console.log("Triangulo Escaleno")
    }


}

console.log(exer2(5,5,5))
console.log(exer2(5,5,3))
console.log(exer2(5,3,7))