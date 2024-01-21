class EmployeeManagementSystem {
  private employees: Employee[] = []

  constructor() {}

  public addEmployee(employee: Employee): void {
    // Real-world code to add employee to the system
    this.employees.push(employee)
  }
  public calculatePayroll(): number {
    // Simulation to calculate payroll for all employees
    let totalPayroll = 0
    for (const employee of this.employees) {
      totalPayroll += employee.calculateSalary()
    }
    return totalPayroll
  }
  public generateReports(): string {
    // Simulation to generate various reports
    return 'Employee reports: ...'
  }
  public promoteEmployee(employee: Employee): void {
    // Code to handle employee promotion logic
  }
}

class Employee {
  private name: string
  private salary: number
  constructor(name: string, salary: number) {
    this.name = name
    this.salary = salary
  }
  calculateSalary(): number {
    return this.salary
  }
}
