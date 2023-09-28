// const x = 100;
// const y = 50;

// function getSum(n1, n2){
//     const sum = n1 + n2;
//     return sum;
// }

// const sum1 =  getSum(x, y);
// const sum2 = getSum(10, 2);

// console.log(sum1,  sum2);


//The call stack(ds)(LIFO)

// function first(){
//     console.log("First");
// }
// function second(){
//     console.log("Second");
// }
// function third(){
//     console.log("Third");
// }

// first();
// second();
// third();

// function first(){
//     console.log("First");
//     second();
// }
// function second(){
//     console.log("Second");
//     third();
// }
// function third(){
//     console.log("Third");
// }
// first();


//Section 2
//Type conversion


// String to Integer
let amount = '100';                      //1   
let str = 'Hello';


amount = +amount;  //Unary operator      //2
str = +str;


amount = Number(amount);                 //3
str = Number(str);

amount = parseInt(amount);
console.log(str);                   //NaN


//Int to string 
amount = amount.toString();             //1(js creates an temp object of amount since toString() works on object)
amount = String(amount);                //2
console.log(typeof amount, amount); 

//String to Float
let amt = '99.5';
amt =  parseFloat(amt); //99.5
amt = parseInt(amt); //99
console.log(typeof amt, amt);

//number to boolean
let a = 1;
a = Boolean(a);
console.log(typeof a, a);

let b = 0;
b = Boolean(b);
console.log(typeof b, b);

//when is the output NaN
console.log(Math.sqrt(-1));
let x = 'hello';
x = parseInt(x);
console.log(typeof x, x);
console.log( 4 + NaN);                  //any number
console.log(undefined + undefined);
console.log('fool'/3);                  //any string


//Operators
// + (1. addition, 2. Concatenation of stirngs)
//Arithematic Operators


let y;
y = 5;
y = y + 5;
console.log(y);
y = y - 5;
console.log(y);
y = y * 5;
console.log(y);
y = y / 5;
console.log(y);
y = y % 5;
console.log(y);
y = y ** 2;
console.log(y);

// Increment/Decrement Operators
let c = y++;
console.log(c,'h');
c = ++y;
console.log(c, y,'j');

y--;
--y;
console.log(y);


//Comparison Operators
console.log(2 == '2');
console.log(2 != '2');


console.log(2 === '2');
console.log(2 !== '2');


//Type Coercion(Stack stores vars and heap stores arrays and functions)
let p;
p = 5 +'5';
console.log(p, typeof p);   //55, string

p = 5 * '5';
console.log(p, typeof p);   //25, number

p = 5 + null;
console.log(p, typeof p);    //5, number

p = 5 + true;
console.log(p, typeof p);    //6, number

p = 5 + undefined;
console.log(p, typeof p);    //NaN, number


//Working with Strings
let z;
const nam = 'John';
const age = 20;

z = 'Hello my name is '+nam+' and I am '+age+' years old.';
p = `Hello my name is ${nam} and I am ${12+7} years old.`
console.log(z);
console.log(p);

//uppercase
z = z.toUpperCase();
console.log(z);

//lowercase
z = z.toLowerCase();
console.log(z);

//charAt
p = z.charAt(2);                //give char at 2 index
p = z[9]; 
console.log(p);


//Access Prototype
p = z.__proto__;
console.log(p, typeof p);                 //outputs all methods for strings

//find index of a char
p = z.indexOf('i');                       //index of the first apperaring char
console.log(p);


//Substring
p = z.substring(1,4);           // (inclusive,exclusive)
console.log(p,'type:',typeof p);

p = z.substring(7);             //starts from the 7Th index till end of the string
console.log(p, typeof p);


//to start from the end(from end it startts with index as -1)
p = z.slice(-10,-6);            //(inclusive, exclusive)
console.log(p, typeof p);

//trim 
z = '        helo       '
p = z.trim();                       //removes spaces before and after
console.log(p, typeof p);


//replace
p = p.replace('helo','Bhumil');
console.log(p);

//  find a string in a string
p = p.includes('Bhumil');
console.log(p);


//valueOf(NO IDEA??????????????)
p = p.valueOf();
console.log(p);

z = 'Hello World';
p = z.split();                  //splits words
console.log(p); 
p = z.split(' ');
console.log(p);
p = z.split('');                //splits each letter
console.log(p);


//Working with numbers
let x1;
const num = 500;                               //java explicitly wraps it to an object when mmethods are used
const num1 = new Number(5);

console.log(num, typeof num);
console.log(num1, typeof num1);

x1 =  num.toString();
x1 = num.toString().length;

console.log(num, typeof num);
console.log(x1);


//toFixed()
z = 10.986759;
p = z.toFixed(2);               //rounds up to 2 decimals((i/p)10 --> (o/p)10.00)
console.log(p);

//toPrecision()
p = z.toPrecision(2);           //rounds up to 2 numeric digits
console.log(p);  

//toExponential()
p = z.toExponential(2);
console.log(p);        //rounds up gives the number in decimal places upto 2 and the rest is powered to e

//toLocaleString('lang-country')    //gives the value in that language
p = z.toLocaleString('ar-Eg');      //Egypt
console.log(p);

//valueOf()
p = z.valueOf();
console.log(p);

//Properties on number objects

//MAX_VALUE
p = Number.MAX_VALUE;           //MAX_VALUE
console.log(p);

p = Number.MIN_VALUE;           //MIN_VALUE 
console.log(p);



//THE MATH OBJECT

console.log(Math);              //lists all math methods

let x2;

x2 = Math.sqrt(9);              //returns square root

x2 = Math.abs(-9.01);           //returns positive value(if -9.00/9.00 then o/p is 9)

x2 = Math.round(9.08);          //round the number

x2 = Math.ceil(4.2);            //rounds-UP(4.2 --> 5)

x2 = Math.floor(4.9);           //rounds-DOWN(4.9 --> 4) 

x2 = Math.pow(2,3);             //2 to the power of 3

x2 = Math.min();                //finds minimum 

x2 = Math.max(12,3,4,5,23,3);   //finds maximum

x2 = Math.random();             //gives random decimal number(0 < number < 1)

x2 = (Math.random()*10).toPrecision(1);  //what i thought for a round number but its gives 1e+1 too as the output sometimes

x2 = Math.floor(Math.random() * 10);        //0 to 9 if you want 10 add 1

console.log(x2);


//Number Challenge
let x3 = Math.floor(Math.random() * 100 + 1);
let x4 = Math.floor(Math.random() * 50 + 1);

const sumOutput =  `${x3} + ${x4} = ${x3 + x4}`;
const differenceOutput =  `${x3} - ${x4} = ${x3 - x4}`;
const productOutput =  `${x3} * ${x4} = ${x3 * x4}`;
const quotientOutput =  `${x3} / ${x4} = ${x3 / x4}`;
const remainderOutput =  `${x3} % ${x4} = ${x3 % x4}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remainderOutput);


//Dates & Times
let d;

d = new Date();

d = d.toString();

d =  new Date(2021, 6, 10, 13, 7, 45);              //(year,month index(0 --> Jan),day,hrs,mins,sec) --> if any value is greater than  its limit value(eg min = 67 > 60)
                                                    // then it converts it accordinly(for given examples 67 --> 1hr 7 mins)
d = new Date('2021-07-23T12:45:00');                //here it wont convert(you have to give time and ALSO DATE in the format: (time)00:00:00 --> without missing any digit)
                                                    //Date(yyyy-mm-dd)

d = new Date('7/1/3 12:35:6');                      //Date(necessary(m/d/y) time(necessary(hrs:min:sec)<--can be single digit)<--)             

d = new Date('2022-07-10'); 

d = new Date('7-10-2022');

d = Date.now();                                     //give time in ms since Jan 1,1970

//Get A time stand from a particular date
d = new Date(1694930894482);
d = d.getTime();
d = d.valueOf();

console.log(d, typeof d);


//Methods on Date Objects
d = new Date('09-18-2023 12:30:56');
// d = d.getFullYear();
// d = d.getDate();
// d = d.getDay();                             //sunday --> 0
// d = d.getHours();   
// d = d.getMinutes();
// d = d.getSeconds();
// d = d.getMilliseconds();

// d = Intl.DateTimeFormat('ar-Eg').format(d);   //Egypt(for local date-time format)
// d = Intl.DateTimeFormat('default', {month: 'long'}).format(d);  
//  d = Intl.DateTimeFormat('default', {month: 'short'}).format(d);  
// Shorter way
// d = d.toLocaleString('default',{month: "short"});

d = d.toLocaleString('default',{
    weekday: 'long',
    year: '2-digit',
    month: 'short',    //narrow --> initial of month
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: '2-digit',
    timeZone: 'America/Los_Angeles',
});

console.log(d, typeof d); 

