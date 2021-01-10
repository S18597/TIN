function secondHiLo(arr){
    arr.sort(function(x,y){
        return x - y;
    });

    var x = [arr[0]];
    var res = [];

    for (var i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i]){
            x.push(arr[i]);
        }
    }

    res.push(x[1],x[x.length-2]);
    return res.join(',');
}