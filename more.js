const bonus=[100,299,300,495];
// let can change value
let salary=450;
salary=455;
// console.log(salary)

//default parameter

function calculateSalary(salary,tax=0.25,bonus=0) {
    const remaining =salary-salary*tax;
    const total = remaining+bonus;
    return total;

}
const parameter =calculateSalary (50000);
// console.log(parameter)

//template string
const elementHtml=`
<div>
     <h3>name:</h3>
     <p>address:</p>
     <p>salary:</p>     
     <p>others:${bonus[ ]}</p>     
     <p>salary:</p>     

</div>`
//arrow function
const doubleIt= x =>x*3;
const calculateSalary2=(salary,tax,bonus)=>salary-salary*tax+bonus;

//spread operator
const ages=[22,13,45,32,23];
const newAges=[...22,24,23];

//Destructuring
const {x,y,z,...c}={x:45,y:23,z:7, name:shahinur islam}

const [a,b,...c]=[21,32,24,15];