function prime(number){
    // Enter your logic here
    var sum =0;
    for(var i=2; i<=number ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime){
            sum++;
        }
    }
    return sum;
}
module.exports = prime;
