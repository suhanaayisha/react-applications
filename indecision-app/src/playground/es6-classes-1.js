
//classses are like bluprints
class Person {
    //this will be called for every instance
    constructor(name="Anon",age=0){
        this.name= name; //this will consider the specific instance of the class
        this.age= age;
    }
    //this has to be called manually
    getGreeting(){
        // return "Hi, I am "+this.name;
        return `Hi, I am ${this.name}!`; // " ` ` " allows us to directly interpolate our variables. This is called template strings.
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; // returns the true or false values 
    }
    getDescription(){
        let description = super.getDescription();

        if(this.major){
            description += ` The student's major is ${this.major}`
        }
        return description;
    }

}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation= homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I live in ${this.homeLocation}`
        }
        return greeting;
    }
}
const me= new Traveller("Suhana Ayisha",22,'Dubai');
console.log(me.getGreeting());
const other= new Traveller();
console.log(other.getGreeting());