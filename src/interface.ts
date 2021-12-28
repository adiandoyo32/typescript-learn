interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log('Asus on')
    }
    off(): void {
        console.log('Asus off')
    }
}

class Macbook implements Laptop {
    name: string = '';
    isGaming: boolean;
    
    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        throw new Error("Method not implemented.");
    }
    off(): void {
        throw new Error("Method not implemented.");
    }
}

let asus = new Asus('Asus', true)
console.log(asus.on());
console.log(asus.off());