function checkType(arg){
    var type = typeof(arg);
    return type;
}
console.log(checkType([1,2,3,]))
console.log(checkType("abc"))
console.log(checkType(false))
console.log(checkType(1))