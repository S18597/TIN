class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set setFullName(firstName_, lastName_){
        this.firstName = firstName_;
        this.lastName = lastName_;
    }
}
class Student extends Person{
    constructor(firstName, lastName, id, grades){
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    get gradeAverage(){
        if (grades.length === 0)
            return 0;
        return grades.reduce((sum, grade) => sum + grade) / grades.length;
    }

    studentInfo(){
        console.log(this.getFullName + ' ' + this.gradeAverage);
    }
}