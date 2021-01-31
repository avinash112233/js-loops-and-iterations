function multiples(number){
    var i=1;
    
    var sum=0;
    var n=0;
    

    while (i<=number){
        var j=1;
        while(j<=10){
            var multiply=i * j;
             sum=sum+multiply;
             j++;
             

        }
       
        i++;
        

    }
    return sum;


}
var result=multiples(2);
console.log(result);
module.exports=multiples;
