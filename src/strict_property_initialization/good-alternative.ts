// Good way
{
  class Person {
    name: string = '';

    constructor() {
      // We can also initialize in the constructor
      // this.name = '';
    }
  }


  const person = new Person();
  person.name.includes('Mat');
}
