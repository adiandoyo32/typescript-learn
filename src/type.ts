// string
let firstName: string = "Add";
firstName = "Els";

// number
let age: number = 20;
age = 25;

// boolean
let isMarried: boolean = false;
isMarried = true;

// any
let anything: any = "Ironman";
anything = 20;
anything = 20 || true || false;

// array
let array: number[] = [1, 2, 3];
array = [4, 5, 6];

let texts: Array<string | number | boolean> = ["adi", "andoyo"];
let random: any[] = ["adi", 25, false];

// tuples
let biodata: [string, number];
biodata = ["sambas", 199];

// enum
enum Gender {
    Male,
    Female,
}

enum Job {
    Student = "Pelajar",
    Employee = "Karyawan",
}

// function
function getName(): string {
    return 'Name';
}

function task(): void {
    console.log('void')
}

function multiply(a: number, b: number): number {
    return a * b;
}

// function as type
type Plus = (a: number, b: number) => number;

const add: Plus = (val1: number, val2: number): number => {
    return val1 + val2;
}