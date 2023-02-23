class TeamMember{
name;
location;
team;
designation;
constructor(name,location){
    this.name=name;
    this.location=location;
}
}
provideFeedback(teachingQuality){
 console.log(`${this.name} thank you for giving us a positive feedback`)
}



class Instructor extends TeamMember{
    name;
    designation ='web course instructor'
    team='web team'
    location;
    constructor(name,location){
      this.name=name;
      this.location=location;
    }
    //dynamic string
    startSupportSession(time){
     console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
     console.log(`please create quiz for ${module}`)
    }
    provideFeedback(teachingQuality){
     console.log(`${this.name} thank you for giving us a positive feedback`)
    }

}
class JobPlacement extends TeamMember{
    name;
    designation ='web course instructor'
    team='web team'
    location;
    constructor(name,location){
      this.name=name;
      this.location=location;
    }
    //dynamic string
    startSupportSession(time){
     console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
     console.log(`please create quiz for ${module}`)
    }
    provideFeedback(teachingQuality){
     console.log(`${this.name} thank you for giving us a positive feedback`)
    }

}
class Developer extends TeamMember{

    name;
    designation ='job placement'
    team='job replacement'
    location;
    super(name,location);
    // this.tech=tech;
    constructor(name,location,tech){
      this.name=name;
      this.location=location;
    }
    //dynamic string
    startSupportSession(time){
     console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
     console.log(`please create quiz for ${module}`)
    }
    provideFeedback(teachingQuality){
     console.log(`${this.name} thank you for giving us a positive feedback`)
    }

}