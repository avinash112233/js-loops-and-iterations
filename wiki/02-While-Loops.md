## While Loop

First, let’s take a look at while loop. In a while loop, 
the given code is executed as long as the condition in the loop is true.
 The condition is specified in ( ) and the code is written in { }.
 In below example, as long as the condition (i <= 5) is true, the code inside { }
  will be executed



**While Loop**

```js
while(condition){
    //Source code
}
```

**Steps in a while loop**

```js
var a=1;                    (1)
while(a<5){                 (2)
    console.log("Hello");   (3)
    a=a+1                   (4)
}
```
**Output**

```js
Hello
Hello
Hello
Hello
```

## Using while Loop

Let’s use while loop. In the below example we have used while loop to print numbers from 20 to 30 using function print().


```js
var a = 20;
while(a<=30){    
    console.log("number is ",a);    
     a = a + 1; 
}
```

Output

```
number is 20.00
number is 21.00
number is 22.00
number is 23.00
number is 24.00
number is 25.00
number is 26.00
number is 27.00
number is 28.00
number is 29.00
number is 30.00
```
 
 ## Infinite Loop


If you forget to update the variable in loop, the condition will always be true.
 It will result in an Infinite loop which will put a huge load on the computer. 
 So, make sure to avoid such mistakes. The below example is missing the statement 
 i = i + 1 or i++. Hence, the loop will run forever


```js
var num=100;
while(num<=100){
    console.log(num);
}
```

**Output**

```
100
100
100
.
.
```
 
 

# Introduction to Nested Loop in JavaScript

Nested Loop is a loop that is present inside another loop. 
Javascript supports the nested loop. In javascript, the loop can have one 
or more or simply can have any number of loops defined inside another loop,
 and also can behave n level of nesting inside the loop. The nested loop is also 
 called as inner loop and the loop in which the nested loop defined is an outer loop.
  The outer loop always executes first and then the inner loop executes.
  In the case of multi-level nested an outer loop executes first and then the 
  1 <sup>st</sup> inner loop executes and then 2 <sup>nd</sup> inner loop executes and so on.
   Any type of nested loop can be defined inside any type of loops.

## Syntax

The Syntax for Nested loop in javascript –

```

Outerloop

{

Innerloop

{

// statements to be execute inside inner loop

}

// statements to be execute inside outer loop

}

```

An Outerloop and Innerloop are the loops that can be any type of loop-like for loop, while loop.

## Flowchart of Nested While Loop

![nested-while-loop](https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/Workspace/Flowchart-of-Nested-while-Loop.png)

## Explanation:

Initially, one condition statement is being provided in the while loop 
if that condition of inner loop condition statement is true then loop execution 
will continue with the same inner loop condition forming a loop as soon as it finds
 that the condition is false it will come out of the inner while loop and search for
 the outer loop condition. If the outer loop condition comes out to be true, then it
  will execute all the sets of statements and information. After following all set of 
  instructions, it will become false and the loop will come out to the main program control
   saying end while loop.

## Syntax for nested while loop

```

while (condition1)

{ // Get inside, only if condition1 satisfies

  // statements to be execute inside outer loop

​

  While (condition2)

  { // Get inside, only if condition2 satisfies

    // statements to be execute inside inner loop.

  }

​

  // statements to be execute inside outer loop

}

```

### Print multiplication table of first three positive nnumbers

```js

let number = 1;

while (number <= 3){

    console.log("Multiplication table of", number);

    let iterator = 1;

    while(iterator <= 10){

        const data = (number * iterator);

        console.log(number + " x " + iterator + " = " + data);

        iterator = iterator + 1;

    }

    console.log("Table completed for", number);

    number = number + 1;

}

```

```

// output

Multiplication table of 1

1 x 1 = 1

1 x 2 = 2

1 x 3 = 3

1 x 4 = 4

1 x 5 = 5

1 x 6 = 6

1 x 7 = 7

1 x 8 = 8

1 x 9 = 9

1 x 10 = 10

Table completed for 1

Multiplication table of 2

2 x 1 = 2

2 x 2 = 4

2 x 3 = 6

2 x 4 = 8

2 x 5 = 10

2 x 6 = 12

2 x 7 = 14

2 x 8 = 16

2 x 9 = 18

2 x 10 = 20

Table completed for 2

Multiplication table of 3

3 x 1 = 3

3 x 2 = 6

3 x 3 = 9

3 x 4 = 12

3 x 5 = 15

3 x 6 = 18

3 x 7 = 21

3 x 8 = 24

3 x 9 = 27

3 x 10 = 30

Table completed for 3

```

