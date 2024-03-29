import {
  Employee,
  EmployeeManagementSystem,
  IEmployee,
  IPayroll,
  IReporting,
  Payroll,
  Reporting,
} from '../src/EmployeeManagementSystem'
import { mock, mockReset } from 'jest-mock-extended'

const mockedEmployee = mock<IEmployee>()
const mockedReporting = mock<IReporting>()
const mockedPayroll = mock<IPayroll>()

const employee = new Employee('Joe', 5000)

describe('Test Employee Management System', () => {
  let employeeManagementSystem: EmployeeManagementSystem

  beforeEach(() => {
    mockReset(mockedEmployee)
    mockReset(mockedReporting)
    mockReset(mockedPayroll)
    employeeManagementSystem = new EmployeeManagementSystem(
      [],
      mockedReporting,
      mockedPayroll
    )
  })

  it('should return all All Employees', () => {
    // Arrange
    const expectedEmployees = 0

    const actualResult = employeeManagementSystem.allEmployees()

    // Act

    // Assert
    expect(actualResult.length).toBe(expectedEmployees)
  })

  it('should add new employee', () => {
    // Arrange
    const expectedEmployees = 1

    // Act
    employeeManagementSystem.addEmployee(employee)

    expect(employeeManagementSystem.allEmployees().length).toBe(
      expectedEmployees
    )
  })

  it('should calculate payroll', () => {
    // Arrange
    const expectedResult = 5000

    // Act
    employeeManagementSystem.addEmployee(employee)

    // Assert
    expect(employeeManagementSystem.calculatePayroll()).toBe(expectedResult)
  })

  it('should generate reports', () => {
    // Arrange
    const expectedResult = 'Employee reports: ...'

    // Assert
    expect(employeeManagementSystem.generateReports()).toBe(expectedResult)
  })
})

describe('Payroll tests', () => {
  let payroll: IPayroll

  beforeEach(() => {
    mockReset(mockedEmployee)
    payroll = new Payroll([employee])
  })

  it('should calculate payroll', () => {
    // Arrange
    const expectedResult = 5000

    // Act

    // Assert
    expect(payroll.calculatePayroll()).toBe(expectedResult)
  })
})

describe('Reporting tests', () => {
  let reporting: IReporting
  it('should generate reports', () => {
    // Arrange
    const expectedResult = 'Employee reports: ...'
    reporting = new Reporting()

    // Act
    const actualResult = reporting.generateReports()

    // Assert
    expect(actualResult).toBe(expectedResult)
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
