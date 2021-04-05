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

interface friendInterface {
  id: ID,
  name: string,
  surname: string,
}

const popularTags: PopularTag[] = ['coffee', 'croissant']

let pageName: string | number = "1";

let errorMessage: string | null = null;

let friend:friendInterface | null = null;