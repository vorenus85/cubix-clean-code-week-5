class School {
  private classes: SchoolClass[] = []
  constructor() {}

  addClass(schoolClass: SchoolClass): void {
    this.classes.push(schoolClass)
  }

  getStudentCount(): number {
    let totalStudents = 0
    for (const schoolClass of this.classes) {
      totalStudents += schoolClass.getStudents().length
    }
    return totalStudents
  }
}

class SchoolClass {
  private students: Student[] = []

  constructor() {}

  addStudent(student: Student): void {
    this.students.push(student)
  }
  getStudents(): Student[] {
    return this.students
  }
}

class Student {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
