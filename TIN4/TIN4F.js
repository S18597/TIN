function isPrime(x){

    if(x===1){
        return 'not prime';
    }else if (x===2){
        return 'prime';
    }else{
        for (var i = 2; i < x; i++){
            if(x % i == 0)
            {
                return 'not prime';
            }
        }
        return 'prime';
    }
}

console.log(isPrime(4))
console.log(isPrime(7))