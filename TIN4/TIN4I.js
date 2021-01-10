function toCoin(amount, coins){
    let result = [];
    for(let i = 0; i < coins.length; i++){
        while (amount >= coins[i]){
            result.push(coins[i]);
            amount = amount - coins[i];
        }
    }
    return result;
}

console.log(checkCoin(42,[25,10,5,2,1]))