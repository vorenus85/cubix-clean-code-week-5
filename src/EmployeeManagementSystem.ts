export interface IEmployee {
  calculateSalary(): number
}

export interface IReporting {
  generateReports(): string
}

export interface IPayroll {
  calculatePayroll(): number
}

export class EmployeeManagementSystem {
  constructor(
    private employees: IEmployee[] = [],
    private reporting: IReporting,
    private payroll: IPayroll
  ) {}

  public addEmployee(employee: IEmployee): void {
    // Real-world code to add employee to the system
    this.employees.push(employee)
  }

  public allEmployees(): IEmployee[] {
    return this.employees
  }

  public calculatePayroll(): number {
    return this.payroll.calculatePayroll()
  }
  public generateReports(): string {
    return this.reporting.generateReports()
  }
}

export class Payroll implements IPayroll {
  constructor(private employees: IEmployee[] = []) {}

  public calculatePayroll(): number {
    // Simulation to calculate payroll for all employees
    let totalPayroll = 0
    for (const employee of this.employees) {
      totalPayroll += employee.calculateSalary()
    }
    return totalPayroll
  }
}
export class Reporting implements IReporting {
  constructor() {}

  public generateReports(): string {
    // Simulation to generate various reports
    return 'Employee reports: ...'
  }
}

export class Employee implements IEmployee {
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
