type Grades = (number | "A" | "B" | "C" | "D" | "E" | "F"| "*")[];

interface student {
    firstname: string;
    lastname: string;
    age: number;
    grades: Grades;
}

let student1: student = {
    firstname: 'Anton',
    lastname: 'Meier',
    age: 17,
    grades: [1, 4, 3,1, 3, 2, 1, 2,]
}

let student2: student = {
    firstname: 'Berta',
    lastname: 'Müller',
    age: 17,
    grades: ['A', '*', 1]
}

let student3: student = {
    firstname: 'Cäsar',
    lastname: 'Schmidt',
    age: 17,
    grades: ['A', 1, '*', 3, 2, 4, 5]
}

function printStudent(student: student) {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ") ");
    console.log("==============================");
    console.log("Grades: " + student.grades);
}

printStudent(student1);
printStudent(student2);
printStudent(student3);
