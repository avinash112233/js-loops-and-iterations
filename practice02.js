function multiples(number){
    var i=1;
    var j=1;
    var sum=0;
    var n=0;
    while (i<=number){
        while(j<=10){
            var multiply=i * j;
             sum=sum+multiply;
             j++;

        }
        var newsum=n+sum;
        i++;
        

    }
    return newsum;


}
var result=multiples(2);
console.log(result);
module.exports=multiples;
