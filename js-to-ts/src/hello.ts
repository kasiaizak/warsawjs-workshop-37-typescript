interface Person {
  firstName: string,
  lastName?: string
}

function getMe (people: Person[]): Person | undefined {
  for (const person of people) {
    if (person.firstName === 'Kasia') {
      return person
    }
  }
}

function sayHello (person: string) {
  console.log('Hello ' + person)
}

function getFullName (person?: Person): string {
  if (person !== undefined) {
    return person.firstName + ' ' + person.lastName
  } else {
    return ''
  }
}

let me = {
  firstName: 'Piotr',
  lastName: 'Szlachciak'
}

let fullName = getFullName(me)

sayHello(fullName)

let kasia = getMe([
  {
    firstName: 'Piotr',
    lastName: 'Szlachciak'
  },
  {
    firstName: 'Kasia',
    lastName: 'Izak'
  }
])

console.log(getFullName(kasia))