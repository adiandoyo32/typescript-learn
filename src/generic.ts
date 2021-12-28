function getData<T>(value: T) {
    return value;
}

// console.log(getData("ASD"));
// console.log(getData(123));

const arrowFunction = <T>(value: T) => {};

class List<T> {
    private data: T[];

    constructor(...elemnts: T[]) {
        this.data = elemnts;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

let numbers = new List();
numbers.add(0);
console.log(numbers.getAll());
numbers.addMultiple(10, 299);
console.log(numbers.getAll());
