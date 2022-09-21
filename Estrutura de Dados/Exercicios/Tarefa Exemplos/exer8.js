function calcu (a, b, c){
    delta = Math.pow(b, 2) - (4 * a * c);
    if(delta < 0){
        return "Delta é negativo!";
    }
    else{
        res = Array();
        res[0] = (-(b) + Math.sqrt(delta)) / (2 * a);
        res[1] = (-(b) - Math.sqrt(delta)) / (2 * a);
        return res;
    } 
}

console.log(calcu(3, -5, 12));
console.log(calcu(1, -10, 24));