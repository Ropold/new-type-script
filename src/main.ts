type Grades = (number | "A" | "B" | "C" | "D" | "E" | "F"| undefined)[];

interface Transcript {
    [subject: string]: Grades;
}

interface student {
    firstname: string;
    lastname: string;
    age: number;
    transcript: Transcript;
}

let student1: student = {
    firstname: 'Anton',
    lastname: 'Meier',
    age: 17,
    transcript: {
        Sport: [2, 'B', 3],
        Kunst: ['C', 1, undefined, 4],
        Mathe: [3, 'B', 1]
    }
}

let student2: student = {
    firstname: 'Berta',
    lastname: 'Müller',
    age: 17,
    transcript: {
        Sport: [1, 'A', undefined],
        Kunst: [2, 'B', 'C'],
        Mathe: [4, 3, 'C']
    }
}

let student3: student = {
    firstname: 'Cesar',
    lastname: 'Schmidt',
    age: 17,
    transcript: {
        Sport: ['B', 2,],
        Kunst: [5, 'D', undefined, 4, 3],
        Mathe: [2, 1, 'B']
    }
}


function repeatLength(student:student){
    let firstRow = (student.firstname + " " + student.lastname + " (" + student.age + ") ")
    return firstRow.length;
}

function printStudent(student: student) {
    console.log(student.firstname + " " + student.lastname + " (" + student.age + ") ");
    console.log("=".repeat(repeatLength(student)));
    console.log("Noten: ")

    for (const subject in student.transcript) {
      const grades = student.transcript[subject]
      const gradesWithStars = grades.map(grade => grade === undefined ? "*" : grade)
        console.log(subject + ": " + gradesWithStars.join(", "));
    }
    console.log("\n");
}

printStudent(student1);
printStudent(student2);
printStudent(student3);
