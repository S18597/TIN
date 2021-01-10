const student = {
    firstName: 'Mike',
    lastName : 'Wazowski',
    id : 1,
    courses: ['Biology', 'English', 'History'],
    grades : [],
    get gradeAverage(){
        if (grades.length === 0)
            return 0;
        return grades.reduce((sum, grade) => sum + grade) / grades.length;
    },
    get getFullName(){
        return this.firstName + ' ' + this.lastName;
    },
    set setFullName(){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let student = new Student("Mike", "Wazowski", 1, [3, 4, 5]);
student.gradeAverage();
student.getFullName();
student.setFullName('Ali', 'Baba');