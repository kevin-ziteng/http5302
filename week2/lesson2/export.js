export class Person{
    constructor(aName){
        this.name = aName;
        this.email;
    }
}

export class Student extends Person{
    constructor(x){
        super(x);
        this.amount = 0;
        this.number;
        this.studentEmail;
    }
    charge(x){
        this.amount = this.amount + x;
    }
}