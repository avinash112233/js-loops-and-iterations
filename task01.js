function getMultiple (number) {
    var i=1;
    var sum=0;
    while (i<=10){
        var multiple=number * i;
        sum=sum+multiple;
        i++;
        
        

    }
    return sum;

    
}
var result=getMultiple(2);
console.log("result:",result);

module.exports = getMultiple;
