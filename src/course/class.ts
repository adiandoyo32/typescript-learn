class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = name;
    }

    describe() {
        console.log(`Department ${this.id} ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployees() {
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(report: string) {
        this.reports.push(report)
    }

    printReport() {
        console.log(this.reports);
    }

    addEmployee(name: string): void {
        if (name == 'Max') return
        this.employees.push(name)
    }
}

const it = new ITDepartment('id1', ['Max', 'ASD'])
it.addEmployee('Max')
it.addEmployee('Anna')

console.log(it);

const accounting = new AccountingDepartment('id2', [])
accounting.addReport('Report 1')
accounting.printReport()
accounting.addEmployee('Max')
accounting.addEmployee('OOO')
accounting.printEmployees()



