function findMax(number){
    var i=0;
    var sum=0;
        while (sum<=number){
            sum=sum+i++;
             

        }
        return i - 2;
}
var result=findMax(26);
console.log(result);
module.exports = findMax;
