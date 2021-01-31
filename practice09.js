function reverse(num) {
  var rem,
    n = 0;
  while (num >= 1) {
    rem = num % 10;
    n = n * 10 + rem;
    num = parseInt(num / 10);
  }
  return n;
}
var a = 12345;
var output = reverse(a);
console.log("output is", output);
module.exports=reverse;
