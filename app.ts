// BASIC
let age: number;
let nameString: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
// let callback = (a: number) => number;

// callback = a => {
//   return 100 + a;
// };

age = 50;
nameString = "Max";
toggle = true;
empty = null;
notInitialize = undefined;

// ANY
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// UNKNOWN

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// TUPPLE
let person: [string, number]
person = ['Max', 21];
  
// ENUM
enum Status { LOADING, READY };

const webpage = { status: Status.READY };

if (webpage.status === Status.LOADING) {
  console.log('Status:', Status.LOADING)
}

if (webpage.status === Status.READY) {
  console.log('Status:', Status.READY)
}

// UNION

let a: string | number;
a = 'string';
a = 122;

// LITERAL

let c: 'enable' | 'disable';
c = 'disable';

// FUNCTION TYPE

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


// CUSTOM TYPE

type page = {
  title: string,
  likes: number,
  accounts: string[],
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1: page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

