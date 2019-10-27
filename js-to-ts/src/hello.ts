function sayHello (person: string) {
  console.log('Hello ' + person)
}

function getFullName (person: {firstName: string, lastName: string}): string {
  return person.firstName + ' ' + person.lastName
}

let me = {
  firstName: 'Kasia',
  lastName: 'Izak'
}

let fullName = getFullName(me)

sayHello(fullName)
