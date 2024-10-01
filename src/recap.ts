const MyName = 'Alejandra';
const MyAge = 25;
MyName.toString();
MyAge.toString();
const suma = (a: number, b:number) => {
  return a + b;
}

class Person {
  constructor(public age: number, public name: string) {}
  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const ale = new Person(21, 'Alejandra');
ale.getSummary();
