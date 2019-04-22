import { Person } from './person';

type Nullable<T> = {
  [A in keyof T]: T[A] | null;
}

const personNullable: Nullable<Person> = {
  age: null,
  height: null,
  name: null,
};

