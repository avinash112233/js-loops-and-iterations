function gcd(a,b){
      if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}
    
var result=gcd(45,25);
console.log(result);

module.exports = gcd;
