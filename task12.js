function armstrong(num){
    


var Number = num;
var digits = 0;

while(num > 0){
digits = digits + 1;
num = parseInt(num/10);
}
num = Number;
var sum = 0;

while(num > 0) {
var digit = num%10;
sum = sum + Math.pow(digit, digits);
num = parseInt(num/10);
}

if(sum == Number){
    return true;
}
else{
  return false;
}
}






var result=armstrong(568);
console.log(result);
module.exports=armstrong;









