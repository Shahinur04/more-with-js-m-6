const num=[33,50,79,78,90,101,30];
const newNum=num.filter(function(num){
    return num%10===0;
})
console.log(newNum)