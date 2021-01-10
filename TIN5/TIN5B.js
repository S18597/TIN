function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.gradeAverage = function () {
        if (grades.length === 0)
            return 0;
        return grades.reduce((sum, grade) => sum + grade) / grades.length;
    }
    this.studentInfo = function () {
        console.log(firstName, lastName, this.gradeAverage());
    }
}

let student = new Student("Mike", "Wazowski", 1, [3, 4, 5])
student.studentInfo()