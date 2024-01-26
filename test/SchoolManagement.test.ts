import {
  ISchool,
  ISchoolClass,
  School,
  SchoolClass,
  Student,
} from '../src/SchoolManagement'
import { mock, mockReset } from 'jest-mock-extended'

const mockedSchoolClass = mock<ISchoolClass>()
const mockedStudent = mock<Student>()
describe('School Management tests', () => {
  describe('School tests', () => {
    let school: ISchool

    beforeEach(() => {
      mockReset(mockedSchoolClass)
      school = new School([])
    })

    it('should get 0 count, as all student count from the school', () => {
      const emptySchool = school
      expect(emptySchool.getStudentCount()).toBe(0)
    })

    it('should add new class to school', () => {
      const student1 = new Student('John')
      const student2 = new Student('Peter')
      const classA = new SchoolClass([student1, student2])

      school = new School([])
      const spy = jest.spyOn(school, 'addClass')
      school.addClass(classA)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(classA)
    })

    it('should get 4 count, as all student from two school class of school', () => {
      const student1 = new Student('John')
      const student2 = new Student('Peter')
      const student3 = new Student('Mark')
      const student4 = new Student('Arthur')

      const classA = new SchoolClass([student1, student2])
      const classB = new SchoolClass([student3, student4])

      const school = new School([classA, classB])

      expect(school.getStudentCount()).toBe(4)
    })
  })

  describe('SchoolClass tests', () => {
    let schoolClass: ISchoolClass

    beforeEach(() => {
      mockReset(mockedStudent)
      schoolClass = new SchoolClass([mockedStudent])
    })

    it('should get all student from school class', () => {
      // Arrange
      const student1 = new Student('Joe')
      const student2 = new Student('Johnny')

      // Act
      schoolClass = new SchoolClass([student1, student2])

      // Assert
      expect(schoolClass.getStudents().length).toBe(2)
    })

    it('should add new student to SchoolClass', () => {
      // Arrange
      const student = new Student('Joe')

      // Act
      schoolClass.addStudent(student)

      // Assert
      expect(schoolClass.getStudents().length).toBe(2)
    })
  })

  describe('Student tests', () => {
    let student: Student
    it('should create student', () => {
      student = new Student('Joe')

      expect(student.getName()).toBe('Joe')
    })
  })
})
