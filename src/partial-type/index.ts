{
  interface Person {
    name: string;
    age: number;
    id: number;
  }

  const person: Person = {
    name: 'Mateus',
    age: 24,
    id: 1,
  };

  const updatePersonById = (id: number, person: Person) => {
    console.log('... update person ...');
  };

  updatePersonById(1, { age: 25 }); // Error because the { age: 25 } doesn't match with Person interface
}


// Common error is use '?' to have optional members, it loses the TypeSafe
{
  interface Person {
    name?: string;
    age?: number;
    id?: number;
  }

  const person: Person = {
    name: 'Mateus',
    age: 24,
    id: 1,
  };

  const updatePersonById = (id: number, person: Person) => {
    console.log('... update person ...');
  };

  updatePersonById(1, { age: 25 });
}

// This is the best approach because we don't make changes to our interface
{
  interface Person {
    name: string;
    age: number;
    id: number;
  }

  const person: Person = {
    name: 'Mateus',
    age: 24,
    id: 1,
  };

  const updatePersonById = (id: number, person: Partial<Person>) => {
    console.log('... update person ...');
  };

  updatePersonById(1, { age: 25 });
}
