function checkPal(str){
    
    const strlen = string.length;
    for (let i = 0; i < strlen / 2; i++){
        if(str[i] !== str[strlen - 1 - i]){
            return'not a palindrome';
        }
    }
    return 'palindrome';
}
console.log(checkPal(madam))
console.log(checkPal(book))