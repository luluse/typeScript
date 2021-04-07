// functions 
let hello: string = "world";
hello = "buy";

const getFullName = (name: string, surname: string): string => {
 return name + ' ' + surname;
}

console.log(getFullName("jordi", "lulu"))


// interfaces
// by default all properties in interface are mandatory. use ? to make a property not mandatory. 

interface UserInterface {
  name: string,
  age?: number,
  getMessage(): string
}

const user: UserInterface = {
  name:'Lulu',
  age: 30,
  getMessage(){
    return "Hello" + name;
  }
};
const user2: UserInterface = {
  name:'Jordi',
  age: 9,
  getMessage(){
    return "Hello" + name;
  }
};


// Union | 
// type and interfaces are always written with capital letters

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null

interface friendInterface {
  id: ID,
  name: string,
  surname: string,
}

const popularTags: PopularTag[] = ['coffee', 'croissant']

const dragonTag: MaybePopularTag = "dragon";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let friend:friendInterface | null = null;


// void
// when we don't return anything, it's void.

const doSomething = (): void =>{
  console.log("doSomething");
}

// other types : any, never, unknown
// "as" operator to make type assertion

let vUnknown: unknown = 10;
let s: string = vUnknown as string;

let pName: string = "1";
let numericPageNumber: number = (pName as unknown) as number;


// working with DOM
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log('someElement', someElement.value)


const moreElement = document.querySelector(".foo");

moreElement.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value)
})


// classes

interface ClientInterface {
  getFullName(): string;
}

 class Client implements ClientInterface {
  firstName: string;
  lastName: string;
  readonly unchangeableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName;
  }

  changeUnchangeableName(): void {
    // this.unchangeableName = "foo";
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
 }

 class Admin extends Client {
  private editor: string

  setEditor(editor:string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
 }

 const client = new Client('Lulu', 'Fe')
 console.log(client)

 const admin = new Admin('Jordi', 'Skee')


// interfaces and functions
// all generic data type are writtin inside <>
// generic \s allow us to provide different data types

//const updateArray = append<string>('baz', ['foo', 'fizz']);

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ... obj,
    id
  };
};

interface UtilisateurInterface<T, V> {
  name: string,
  data: T,
  meta: V,
}

const utilisateur: UtilisateurInterface<{meta: string}, string> = {
  name: 'James',
  data: {
    meta: "foo",
  },
  meta: 'Fizz'
}

const utilisateur2: UtilisateurInterface<string[], []> = {
  name: 'Bear',
  data: ['foo', 'buzz'],
  meta: []
}

const result = addId<UtilisateurInterface>(utilisateur);
console.log('result', result);