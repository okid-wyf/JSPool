var toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrayFilter(array, test){
return array.filter(numb => test(numb));
}
var passed= arrayFilter(toFilter, function(value){
return value % 3 === 0;
});

console.log(passed);
