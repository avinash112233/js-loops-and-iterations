function multipleSum(number){
    var sum=0;
    for(var i=0;i<number;i++){
    if(i%3===0||i%5===0){
        sum=sum+i;
        

    }
    
   
    }
     return sum;
    
}
var result=multipleSum(2);
console.log(result);
module.exports = multipleSum;
