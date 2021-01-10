let facRec = function rec(x){
    if (x == 0|| x == 1)
        return 1;
    return x * rec(x-1) 
}

function facIte(x){
    let fac = 1;
    for (let i = 2; i<=x; i++)
        fac *= i;
    return fac
}


console.log(facRec(7))
console.log(facIte(7))
