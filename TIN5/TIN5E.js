class student{
    constructor(firsName, lastName, id, grades){
        this.firsName = firsName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    get gradeAverage(){
        if (grades.length === 0)
            return 0;
        return grades.reduce((sum, grade) => sum + grade) / grades.length;
    }

    get getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set setFullName(firstName_, lastName_){
        this.firstName = firstName_;
        this.lastName = lastName_;
    }

    studentInfo(){
        console.log(this.getFullName + ' ' + this.gradeAverage);
    }
}