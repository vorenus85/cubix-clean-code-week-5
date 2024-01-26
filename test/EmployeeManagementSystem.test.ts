import {
  Employee,
  EmployeeManagementSystem,
} from '../src/EmployeeManagementSystem'
import { mock, mockReset } from 'jest-mock-extended'

const mockedEmployee = mock<Employee>()

describe('Test Employee Management System', () => {
  let employeeManagementSystem: EmployeeManagementSystem

  beforeEach(() => {
    mockReset(mockedEmployee)
    employeeManagementSystem = new EmployeeManagementSystem([
      mockedEmployee,
      mockedEmployee,
    ])
  })

  it('should return employees length with 2', () => {
    // Arrange
    const expectedEmployees = 2

    const actualResult = employeeManagementSystem.allEmployees()

    // Act

    // Assert
    expect(actualResult.length).toBe(expectedEmployees)
  })

  it('should add new employee', () => {
    // Arrange
    const expectedEmployees = 3
    const newEmployee = new Employee('Joe', 5000)

    // Act
    employeeManagementSystem.addEmployee(newEmployee)

    expect(employeeManagementSystem.allEmployees().length).toBe(
      expectedEmployees
    )
  })

  it('should calculate payroll', () => {
    // Arrange
    const expectedResult = 10000
    const newEmployee = new Employee('Joe', 5000)
    employeeManagementSystem = new EmployeeManagementSystem([newEmployee])

    // Act
    employeeManagementSystem.addEmployee(newEmployee)

    expect(employeeManagementSystem.calculatePayroll()).toBe(expectedResult)
  })

  it('should generate reports', () => {
    // Arrange
    const expectedResult = 'Employee reports: ...'

    // Assert
    expect(employeeManagementSystem.generateReports()).toBe(expectedResult)
  })
})

describe('Test Employee', () => {
  let employee: Employee
  const name = 'Joe'
  const salary = 5000

  describe('Happy path', () => {
    it('should create Employee with valid name and salary', () => {
      // Arrange
      // Act
      employee = new Employee(name, salary)
      // Assert
      expect(employee.getName()).toBe(name)
      expect(employee.calculateSalary()).toBe(salary)
    })
  })

  describe('Error paths', () => {
    test.each`
      invalidValue | invalidProperty | name     | salary   | errorMessage
      ${''}        | ${'name'}       | ${''}    | ${5000}  | ${'Employee name must be non-empty string'}
      ${0}         | ${'salary'}     | ${'Joe'} | ${0}     | ${'Employee salary must be positive number'}
      ${-5000}     | ${'salary'}     | ${'Joe'} | ${-5000} | ${'Employee salary must be positive number'}
    `(
      'should throw error because of property of $invalidProperty is invalid, value is $invalidValue',
      ({ name, salary, errorMessage }) => {
        const expectedError = new Error(errorMessage)

        const actualResult = () => new Employee(name, salary)

        expect(() => actualResult()).toThrow(expectedError)
      }
    )
  })
})
