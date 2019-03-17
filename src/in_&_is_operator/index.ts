interface Developer {
  name: string;
  bestLanguage: string;
}

interface Designer {
  name: string;
  bestSoftware: string;
}


const developer: Developer = { name: 'Mateus', bestLanguage: 'Ruby' };
const designer: Designer = { name: 'Luís', bestSoftware: 'Photoshop' };
sayHello3(developer);
sayHello4(designer);

// function sayHello(person: Developer | Designer): void {
//   if (person.bestLanguage) {
//     console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
//   } else {
//     console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
//   }
// }

// function sayHello2(person: Developer | Designer): void {
//   if ((person as Developer).bestLanguage) {
//     console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
//   } else {
//     console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
//   }
// }

function sayHello3(person: Developer | Designer): void {
  if (isDeveloper(person)) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}

function sayHello4(person: Developer | Designer): void {
  if ('bestLanguage' in person) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}

function isDeveloper(person: Developer | Designer): person is Developer {
  return (person as Developer).bestLanguage !== undefined;
}
