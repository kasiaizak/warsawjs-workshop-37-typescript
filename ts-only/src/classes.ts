export class Animal {
  name: string;
  protected anyVariable: string;

  constructor(name: string) {
    this.name = name
    this.anyVariable = "";
  }
}

class Dog extends Animal {
  private owner: string;

  constructor(name: string, owner: string) {
    super(name)
    this.owner = owner
    this.anyVariable = "test"
  }

  hasSameOwner(dog: Dog) {
    return dog.owner === this.owner;
  }
}

let dog = new Dog('Fluffy', 'Piotr')

console.log(dog instanceof Dog)
console.log(dog instanceof Animal)
console.log(dog instanceof Array)