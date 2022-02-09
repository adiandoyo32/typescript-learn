interface Greeting {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greeting {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(phrase: string): void {
      console.log(phrase + ' ' + this.name)
  }
}

let user1: Greeting;
user1 = new Person('Max', 30)
user1.greet('Hi')
