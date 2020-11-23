function countUpperCaseChars(str) {
    var count=0, len=str.length;
    for(var i=0; i<len; i++){
        if(/[G]/.test(str.charAt(i))) count++;

    }
    return count
}
str = "my G love killing Gnome in World of Gnome";
console.log(countUpperCaseChars(str));