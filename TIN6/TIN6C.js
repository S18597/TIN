function valStudentId (studentId) {
  const regex = /^\d{5}$/
  return regex.test(studentId.toString())
}

function valEmail (email, studentID) {
  const regex = new RegExp('^s' + studentID + '@pjwstk\.edu\.pl$', 'i')
  return regex.test(email)
}

const studentId = document.getElementById('studentID')
const email = document.getElementById('email')

function valForm () {
  const OKstudentId = valStudentId(studentId.value)
  if (OKstudentId) {
    studentId.style.backgroundColor = 'green'
  } else {
    studentId.style.backgroundColor = 'red'
  }
  const OKemail = valEmail(email.value)
  if (OKemail) {
    email.style.backgroundColor = 'green'
  } else {
    email.style.backgroundColor = 'red'
  }
  return OKstudentID && OKEmail
}