# To-D0 : Write JS program for Prime Number


You have to check whether a number is prime or not.
 A number is prime if it is divisible by 1 and the number itself.
  We will create a function that takes a number as input and returns
   true if number is prime and false if it is not prime. Output code is 
   in the format console.log("Result is ", variableName).

- Open practice11.js
- Copy the below code in that file.
- Commit your changes.

```js
unction prime(n){
    var i,j=0;
    for (i=2;i<n;i++){
        if(n%i===0){
            j=1;
        }
    }
    if(j===0){
        return true;
    }
    else{
        return false;
    }
    }
var num = //Enter any number here by yourself
var output = prime(num);
console.log("Result is ",output);
