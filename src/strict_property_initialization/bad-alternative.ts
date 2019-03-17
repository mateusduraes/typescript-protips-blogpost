// Bad alternative
{
  class Person {
    name: string | undefined;

    constructor() {}
  }


  const person = new Person();
  if (person.name) {
    person.name.includes('Mat');
  }
  // It will work, but it is a really bad approach to write if's everywhere.
}
