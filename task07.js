function factorial(number){
    var multi=1;
    for(var i=1;i<=number;i++){
         multi=multi*i;
    }
    return multi;

}
var result=factorial(20);
console.log(result);
module.exports=factorial;
