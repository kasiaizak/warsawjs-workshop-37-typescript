interface Person {
  firstName: string,
  lastName: string
}

function sayHello (person: string) {
  console.log('Hello ' + person)
}

function getFullName (person: Person): string {
  return person.firstName + ' ' + person.lastName
}

let me = {
  firstName: 'Kasia',
  lastName: 'Izak'
}

let fullName = getFullName(me)

sayHello(fullName)
