import { Person } from './person';
type Fully<T> = {
  [A in keyof T]-?: T[A];
}

const personFull: Fully<Person> = {
  name: 'Kate',
  age: 33,
  height: 165,
}
