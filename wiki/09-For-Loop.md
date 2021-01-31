## For Loop


For loop is used when you know the number of repetitions the loop needs to make. 
Although While loop and for loop follow the same steps but they have different syntax.



```js
for(var i=1;i<=5;i++){
    console.log(i);
}
```
 
## Writing for loop

In the below example, we have used for loop to print numbers from 1 to 20. 
We have used a variable i which is initialized at value 20.
 Then, the condition is that i > = 1. If the condition is true,
 the program prints the number and finally,
  the variable is updated using shortcut i - = 1.




```js
for(i=20;i>=10;i-=1){
    console.log("number is ",i);
}
```

```js
1
2
3
4
5
``` 

Output

```
number is 20.00
number is 19.00
number is 18.00
number is 17.00
number is 16.00
number is 15.00
number is 14.00
number is 13.00
number is 12.00
number is 11.00
number is 10.00
```

## Increment And Decrement


The increment operator (++) increases, and the decrement operator (--)
 decreases the value of a variable by one. These operators are very helpful
  when making while loops or for loops.






```
i = i+1 -> i+=1 -> i++
i = i-1 -> i-=1 -> i--
```
 


```js
for(var i=1;i<=5;i++){
    console.log(i);
}
```


```js
1
2
3
4
5
``` 
