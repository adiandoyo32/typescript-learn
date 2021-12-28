export class User {
    // public name: string;
    // public age: number;

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    constructor(public name: string, public age: number) {}

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => this.name;
}

let user = new User("Adi", 25);
console.log(user.name);
console.log(user.age);

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    private _email: string = "";

    static getRoleName: string = "admin";

    constructor(name: string, age: number, public phone: string) {
        super(name, age);
    }

    static getNameRole(): string {
        return "Admin"
    }

    getRole(): { read: boolean; write: boolean } {
        return {
            read: this.read,
            write: this.write,
        };
    }

    public set setEmail(value: string) {
        if (value.length < 5) this._email = "email not found";
        else this._email = value;
    }

    public get getEmail(): string {
        return this._email;
    }


}

let admin = new Admin("Add", 30, "612312312");
admin.setEmail = "admin@email.com";

// console.log(admin.getName());
// console.log(admin.getRole.toString());
// console.log(admin.getEmail);
console.log(Admin.getNameRole())

abstract class Vehicle {
    abstract wheels: number;
    start(): void {
        console.log("brumm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}
 
class Motor extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();