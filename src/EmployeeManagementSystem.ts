export class EmployeeManagementSystem {
  constructor(private employees: Employee[] = []) {}

  public addEmployee(employee: Employee): void {
    // Real-world code to add employee to the system
    this.employees.push(employee)
  }

  public allEmployees(): Employee[] {
    return this.employees
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
}

export class Employee {
  constructor(
    private name: string,
    private salary: number
  ) {
    this.setName(name)
    this.promoteEmployee(salary)
  }

  public getName(): string {
    return this.name
  }

  public calculateSalary(): number {
    return this.salary
  }

  private setName(name: string) {
    if (!name || typeof name !== 'string') {
      throw new Error('Employee name must be non-empty string')
    }
    this.name = name
  }

  public promoteEmployee(salary: number) {
    if (!salary || typeof salary !== 'number' || salary < 1) {
      throw new Error('Employee salary must be positive number')
    }
    this.salary = salary
  }
}
