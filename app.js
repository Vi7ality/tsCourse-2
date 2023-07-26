// BASIC
var age;
var nameString;
var toggle;
var empty;
var notInitialize;
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
var anything;
anything = -20;
anything = 'Text';
anything = {};
// UNKNOWN
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// TUPPLE
var person;
person = ['Max', 21];
// ENUM
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var webpage = { status: Status.READY };
if (webpage.status === Status.LOADING) {
    console.log('Status:', Status.LOADING);
}
if (webpage.status === Status.READY) {
    console.log('Status:', Status.READY);
}
// UNION
var a;
a = 'string';
a = 122;
// LITERAL
var c;
c = 'disable';
// FUNCTION TYPE
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
