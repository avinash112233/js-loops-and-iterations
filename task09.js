// function reverse(n){
    
//     var s1=0;
//     var s2=0;
//     while(n!=0){
//        var r=n%10;
//         if(r%2==0){
//             s1+=r;
//         }
//         else{
//             s2+=r;
//         }
//         n=n/10;
//          return s1;
//     }
   
    
// }

// var output=reverse(123456987);
// console.log(output);
// module.exports=reverse;
function reverse(num) {
  var rem,
    n = 0,
    s1=0;
  while (num >= 1) {
    rem = num % 10;
    n = n * 10 + rem;
    if(rem%2==0){
            s1=s1+rem;
    }
    num = parseInt(num / 10);
  }
  return s1;
}
var a = 12345;
var output = reverse(a);
console.log("output is", output);
module.exports=reverse;

