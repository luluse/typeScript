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