// default parameter
const fullName = (firstName: string, lastName: string = "Andoyo"): string => {
    return firstName + " " + lastName;
};

console.log(fullName("Adi"));

// optional parameter
const getValue = (val1: number, val2?: number): number => {
    if (val2 == undefined) return val1;
    return val1 + val2;
};

console.log(getValue(10, 30));
