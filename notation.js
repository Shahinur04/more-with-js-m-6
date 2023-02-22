const student = {
    name:'Shahinur',
    gpa: 5.00,
    class: 'honers',
    age: 22,
    interested: {
        study: 'higher',
        hobby: 'businessman',
        plan: 'earlyMarriage',
        dream: 'bcs Cadre',

    }
}
// const interested=student.gpa;
// const interested=student.class;
const interested=student['gpa'];
console.log(interested)