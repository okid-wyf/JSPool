
function range(start, end, step) {


    var result = [];


    if (step == undefined && start > end)
        step = -1;
    else if (step == undefined)
        step = 1;


    numLoops = Math.abs((start - end) / step);
    //Math.abs : La fonction Math.abs() retourne la valeur absolue d'un nombre

    for (var i = 0; i < numLoops; i++) {


        result.push(start);


        start += step;
    }


    return result;
}



console.log(range(1, 10, 2));

console.log(range(10, 5));

console.log(range(5, 2, -1));
