//reduce with for loop
let array=[1,9,17,22];
let sum=0;
for (let i = 0; i < array.length; i++) {
    sum+=array[i];
    
}
// console.log(sum)


//reduce with reduce function
let array1=[1,9,17,22];
let newArray=array1.reduce(function(total,num){
    return total +num;
})
console.log(newArray)