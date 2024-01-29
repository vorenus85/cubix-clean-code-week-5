export interface ISchoolClass {
  addStudent(student: Student): void
  getStudents(): Student[]
}

export interface ISchool {
  addClass(schoolClass: ISchoolClass): void
  getStudentCount(): number
}

export class School implements ISchool {
  constructor(private classes: ISchoolClass[] = []) {
    this.classes = classes
  }

  addClass(schoolClass: ISchoolClass): void {
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

export class SchoolClass implements ISchoolClass {
  constructor(private students: Student[] = []) {
    this.students = students
  }

  addStudent(student: Student): void {
    this.students.push(student)
  }
  getStudents(): Student[] | [] {
    return this.students || []
  }
}

export class Student {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }
}
