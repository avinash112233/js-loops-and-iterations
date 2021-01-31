function sumSeries(n){
    var sum=0;
  
    for (var i=1; i<=n; i++){
     sum=sum+1/i;
     
    }
  return sum.toFixed(2);
}
var result=sumSeries(5);
console.log(result);

module.exports = sumSeries;
