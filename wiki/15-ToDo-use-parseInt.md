# To-Do : Use ParseInt()


We will reverse a number using javascript. We will also use parseInt()
 function which is used to extract the integer value from a number. 

Note: Javascript does not differentiate between integers and decimal numbers

- Open practice09.js
- Copy the below code in that file.
- Commit your changes.

```js
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
```
