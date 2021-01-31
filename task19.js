function series(number){
    if (number==1){
        return 1;
    }
    else{
        return (Math.pow(number,number)+series(number-1))
    }
}
var result=series(560);
console.log(result);


module.exports = series;
