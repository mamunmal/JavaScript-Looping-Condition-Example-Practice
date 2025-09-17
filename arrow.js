const student = {
    name: 'John',
    age: 25,
    grade: 'A'
}
const getName = person => person.name;
const getAge = person => person.age;
const age = getAge(student);
console.log(age);