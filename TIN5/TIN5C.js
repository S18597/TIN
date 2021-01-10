function createStudent(firstName, lastName, id){
    const student = {
        firstName: 'Mike',
        lastName : 'Wazowski',
        id : 1,
        courses: ['Biology', 'English', 'History'],
        grades : [],
        gradeAverage : function(){
            if (grades.length === 0)
                return 0;
            return grades.reduce((sum, grade) => sum + grade) / grades.length;
        }
    }
    let newStudent = Object.create(student);
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.id = id;
    return newStudent
}

const st = createStudent('Rory', 'Gilmore', 2);
console.log('Name: ' + firstName);
console.log('Surname: ' + lastName);
console.log('Id: ' + id);
console.log('Courses: ' + courses);
console.log('Grade average: ' + gradeAverage);