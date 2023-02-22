//ES6--synthetic sugar
//1  class variable name should be uppercase
//2  property should use; and define value =


class Instructor{
    name;
    designation ='web course instructor'
    team='web team'
    location;
    constructor(name,location){
      this.name=name;
      this.location=location;
    }
    startSupportSession(time){
     console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
     console.log(`please create quiz for ${module}`)
    }

}
const Jannat = new Instructor('jannat','mumbai');
console.log(Jannat);
Jannat.startSupportSession('9.00');
Jannat.createQuiz(60);
const shahinur=new Instructor('shahinur','parbatipur');