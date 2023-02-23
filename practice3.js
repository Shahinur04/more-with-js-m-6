const num=[33,50,79,78,90,101,30];
const findNum=num.find(function(num){
    return num % 10===0;
})
console.log(findNum)