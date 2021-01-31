function round(number){
    while (number % 10){
        number++;
    }
    return number;
}
var result=round(95);
console.log(result);
module.exports = round;
