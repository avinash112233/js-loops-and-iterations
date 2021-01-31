function solveCube(number){
    var i=1;
    var sumofcube=0;
    while (i<=number){
        
        var cube=i * i * i;
        var sumofcube=sumofcube + cube;
        i++;
    }
    return sumofcube;
}
var result=solveCube(3);
console.log(result);
module.exports = solveCube;
