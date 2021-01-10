function binarySearch(args, val){
    var left = 0;
    var right = args.length-1;
    var mid = Math.floor((left + right)/2);

    while (args[mid] != val && left < right){
        if(val < args[mid]){
            right = mid-1;
        }else if(val > args[mid]){
            left = mid+1;
        }
        mid = Math.floor((left + right)/2);
    }

    return(args[mid] != val) ? -1 : mid;
}

console.log([1,2,3,4,5],4)