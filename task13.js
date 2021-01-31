function prime(num){
     for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}
var result=prime(5);
console.log(result);
module.exports = prime;
