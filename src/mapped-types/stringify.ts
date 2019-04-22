import { Person } from './person';

type Stringify<T> = {
  readonly [A in keyof T]: string;
}

const personStr: Stringify<Person> = {
  age: '33',
  name: 'Kate',
  height: '165',
}
