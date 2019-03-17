// Wrong
{
  class Person {
    name: string;

    constructor() {}
  }


  const person = new Person();
  person.name.includes('Mat');
  // cannot ready property 'includes' of undefined.
}
