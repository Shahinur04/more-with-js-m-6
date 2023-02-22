const numbers=[96,66,44,22,66,88];
const half=numbers.map(n=>n/2);
const thirds=numbers.map(n=>n/3);
console.log(half)
console.log(thirds)


//friends array hote first letter niye new akta array

const friends=['tom cruse','tom bal','tom hal','tom jal'];
const firstLetter=friends.map(f=>f[0]);
console.log(firstLetter)
const nameLengths=friends.map(f=>f.length);
console.log(nameLengths)

const products=[
    {id:1,name:'mobile',price:5000},
    {id:1,name:'tablet',price:55000},
    {id:1,name:'laptop',price:50000},
]
const items=products.map(p=>console.log(p.name))