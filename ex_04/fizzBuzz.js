function fizzBuzz() {
    var str = "";
    for (var i = 1; i <= 20; i++) {
        if (i==20)
        str += "Buzz";
        
        else if ((i % 5 == 0) & (i % 3 == 0)) {
            str += "fizzBuzz, ";
        }
        else if (i % 3 == 0) {
            str += "Fizz, ";
        } else if (i % 5 == 0) {
            str += "Buzz, ";
        }else {
            str += i + ", ";
        } 
    }console.log(str);
}
        fizzBuzz()


