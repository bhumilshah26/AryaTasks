// SECTION 6

//LOOPS ITERATION AND ARRAY METHODS
//for loop(cannot you const var)
//REMINDER: (let <- block scope var <- global scope)

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


//NEST LOOPS
for (let j = 1; j <= 3; j++) {
    console.log(`Number ${j}`);

    for (let k = 1; k <= 10; k++) {
        console.log(`${j} * ${k} = ${j * k}`);
    }
}

//Loops to traverse an array
const names = ['Brad', 'sarah', 'Sam'];

for (let m = 0; m < names.length; m++) {
    console.log(names[m]);
}

//Break and Continue Statements
// Breaking

for (let f = 0; f <= 20; f++) {
    if (f == 15) {
        console.log('Breaking...');
        break;
    }
    console.log(f);
}

// Continue
for (let t = 0; t <= 20; t++) {
    if (t == '15') {
        console.log('Skipping the 15...');
        continue;
    }
    console.log(t);
}

//while And do...While Loops

let z = 0;
console.log(z);
while (z <= 3) {
    console.log(`Number ${z}`);
    z++;
}

z = 0;

// //Loop over arrays  ??(fault in while(names[z] != '\0'))
while (z < names.length) {
    console.log(names[z]);
    z++;
}

//Nested while loops
let a = 1;
let b = 1;
while (a <= 3) {
    while (b <= 10) {
        console.log(`${a} * ${b} = ${a * b}`);
        b++;
    }
    b = 1;
    a++;
}
a = 21;
//do While(run atleast once)
do {
    console.log(a);
} while (a <= 20);


// FIZZBUZZ CHALLENGE
// for(i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FIZZBUZZ');
//         continue;
//     }
//     else if(i % 3 == 0){
//         console.log('FIZZ');
//         continue;
//     }
//     else if(i % 5 == 0){
//         console.log('BUZZ');
//         continue;
//     }
//     else{
//     console.log(i);
// }
// }


//for of Loop(loop thru iterable object literals)
//Loop over arrays
const items = ['Book', 'Pencil', 'Eraser'];
const users = [
    { name: 'Brad' },
    { name: 'John' },
    { name: 'Sarah' }
];

for (const item of items) {           //can use let
    console.log(item);
}


for (const user of users) {
    console.log(user);
}

// Loop over strings

const string = 'Hello world';

for (const letter of string) {
    console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('Name', 'John');
map.set('Age', 19);

for (const [key, value] of map) {
    console.log([key, value]);
    console.log(key);
    console.log(value);
}

//for in Loop(loop thru not object literals)
const colorObj = {
    color1: 'Red',
    color2: 'Blue',
    color3: 'Green',
    color4: 'Yellow',
}
for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const arr = ['red', 'green'];

for (const color in arr) {
    console.log(color, arr[color]);
}

// HIGHER ARRAY METHODS

//Array.forEach method(takes function as an argument) <---0takes three arguments
//works with array of objects too

const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.__proto__);

arr1.forEach((element, inde, arr1) => console.log(element, inde, arr1));


function logarr1(social) {
    console.log(social);
}
arr1.forEach(logarr1);   //() not required 

//Array.filter(returns something(mostly an array or modified array))
// <- filter an array based on some condition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter odd numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const Companies = [
    { name: 1, category: 'Finance', start: 1981, end: 2004 },
    { name: 2, category: 'Retail', start: 1992, end: 2008 },
    { name: 3, category: 'Auto', start: 1999, end: 2007 },
    { name: 4, category: 'Retail', start: 1989, end: 2010 },
    { name: 5, category: 'Technology', start: 2009, end: 2014 },
    { name: 6, category: 'Finance', start: 1987, end: 2010 },
    { name: 7, category: 'Auto', start: 1986, end: 1996 },
    { name: 8, category: 'Technology', start: 2011, end: 2016 },
    { name: 9, category: 'Retail', start: 1981, end: 1989 },
];

//Get companies of retail
const retailCompanies = Companies.filter(ret => ret.category === 'Retail');
console.log(retailCompanies);

//Get companies started in or after 1980 and ended before or in 2005 
const c = Companies.filter(s => (s.start >= 1980 && s.end <= 2005));
console.log(c);

//Get companes lasted 10 or more years
const years = Companies.filter(s => s.end - s.start >= 10);
console.log(years);

// Array.map(takes function as an input)
// map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array

const n = [1, 2, 3, 4, 5];

const doubleNumbers = n.map(number => number * 2);

console.log(doubleNumbers);

const doubleNumbers2 = [];

n.forEach(number => doubleNumbers2.push(number * 2));

console.log(doubleNumbers2);

const Companies1 = [
    { name: 1, category: 'Finance', start: 1981, end: 2004 },
    { name: 2, category: 'Retail', start: 1992, end: 2008 },
    { name: 3, category: 'Auto', start: 1999, end: 2007 },
    { name: 4, category: 'Retail', start: 1989, end: 2010 },
    { name: 5, category: 'Technology', start: 2009, end: 2014 },
    { name: 6, category: 'Finance', start: 1987, end: 2010 },
    { name: 7, category: 'Auto', start: 1986, end: 1996 },
    { name: 8, category: 'Technology', start: 2011, end: 2016 },
    { name: 9, category: 'Retail', start: 1981, end: 1989 },
];

//Create an array of company names
let cd = Companies1.map(c => c.name);

cd = Companies1.map((company) => ({
    name: company.name,
    category: company.category
}));


//Create an array of the length of each company in years

cd = Companies1.map((company) => ({
    name: company.name,
    year: company.end - company.start,
})
)

// console.log(cd);


//chain map methods


const ne = [1, 2, 3, 4, 5];

const squareanddouble = ne
    .map(number => Math.sqrt(number))  //Result of the first map goes to the second map) 
    .map(sqrt => sqrt * 2);

console.log(squareanddouble);

//Chaining different methods

const evenDouble = ne
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(evenDouble);

// Array.reduce(reduce your array down to a single value)   <---- take two args
// (example: shopping cart you might have an array of products 
//with different prices and you want to reduce that down to a total of the prices)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers2.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue; //accumulator keeps on storing the previous answer
},);                 //initializes sum -> 0(by default initialization 0)

console.log(sum);

const sum2 = numbers2.reduce((accumulator, currentvalue) => accumulator + currentvalue, 6);
console.log(sum2);

//Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers2) {
        acc += cur;
    }
    return acc;
}
console.log(sum3);     //print the function 
console.log(sum3());   //prints the value


const cart = [
    { id: 1, name: 'Product 1', prize: 130 },
    { id: 2, name: 'Product 2', prize: 170 },
    { id: 3, name: 'Product 3', prize: 160 },
];

const total = cart.reduce((acc, curr) => acc + curr.prize, 0); //first argument always accumulates 
//and second is used to point the new value
console.log(total);


//Array method challenges
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];


const youngPeople = people
.filter(p => p.age <= 25)
.map(person =>({
    name: person.firstName + ' ' + person.lastName,
    email:person.email}
));
//always keep a habit of 
//method_name(()());

console.log(youngPeople);


const numb = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbersaAdd  = numb
.filter(n => (n > 0))
.reduce((acc, curr) => acc + curr);

console.log(positiveNumbersaAdd);

const words = ['coder', 'programmer', 'developer'];

const captializedWords = words.map((item) => (item[0].toUpperCase()+ item.slice(1)));
console.log(captializedWords);
