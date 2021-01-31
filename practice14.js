function one(n) {

  var sum = 0; 
  
        
        while (n > 0 || sum > 9)  
        { 
            if (n == 0) 
            { 
                n = sum; 
                sum = 0; 
            } 
            sum += n % 10; 
            n /= 10; 
        } 
        return sum; 
}

var output=one(56);
console.log(output);
module.exports=one;
