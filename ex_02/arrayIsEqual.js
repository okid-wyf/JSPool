function arrayIsEqual(a, b){
    
    
    
    return a.length === b.length && 
    a.every((val, index) => val === b[index]);


}
    var a = [1, 2];
    var b = [1, 2];
console.log(arrayIsEqual (a, b));

