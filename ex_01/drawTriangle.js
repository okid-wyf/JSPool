function add(size) {
    
    var i = 0;
    var tri = '';
    if (!isNaN(size))
    while (i <= size) {
        
        i++;
        tri+='$';
        
        console.log(tri);
    }
    else {
        console.log("STFU");
    }
    
}
add(5)
