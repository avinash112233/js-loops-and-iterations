function divide(x, y) {
      var result = x;
      if (y == 1) {
        return result;
      }
       else {
        while (result % y == 0) {
          result = result / y;
        }
      }
      return result;
    }
var finalresult=divide(1234,2);
console.log(finalresult);
module.exports = divide;
