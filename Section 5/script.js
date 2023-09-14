//Logic and control flow

//if statements (have their own scope -> only var has global scope even if declared in if)
if(true){
    console.log('This is true');
}
if(false){
    console.log('This is not true');
}
const x = 10;
const y = 10;
if(x === y){
    console.log("Equal");
}
else{
    console.log("not Equal");
}

// shorthand if(without using curly braces)
if(x === y)
console.log('This is true'),  // use a comma for multiple statements
console.log('20');

else
console.log('This is false');

//if else nesting(Test multiple conditions)

const d = new Date();  //(date)(month, date, year, hrs, min , secs)

const hour = d.getHours();

console.log(hour);

if(hour < 12){
    console.log('Good Morning');
}
else if(hour < 18){
    console.log('Good Afternoon');
}
else{
    console.log('Good Night');
}

//switch
switch(true){
    case hour < 12:
        console.log('Good Morning');
        break;

    case hour < 18:
        console.log('Good Afternoon');
        break;

    default:
        console.log('Good Night');     
}


//Challenge

function calculator( num1,  num2,  operator){
 if(operator == '+')
 return num1 + num2;

 else if(operator == '-')
 return num1 - num2;

 else if(operator == '*')
 return num1 * num2;

 else if(operator == '/')
 return num1 / num2;

 else if(operator == '%')
 return num1 % num2;

 else
 console.log('Incorrect arguments');
}


console.log(calculator(5, 5 ,'%'));

(function calci(num1, num2, operator){

    switch(operator){
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '5':
            console.log(num1 % num2);
            break;
            default:
                console.log('Invalid Input');
    }
})(5,2,'*');


//Truthy and Falsy Values
//anything like a variable passed in a if condition is consider true if it as some value
//true => var has some value false => var has null value

//Falsy Values
// ->false
// -> 0
// -> "" or ''(Empty String)
// -> null
// -> undefined
// -> NaN

//Some Truthy Values
// ->true
// ->'0'
// ->'false'
// ->' '(space in a string)
// ->[] (Empty Array)
// ->{} (Empty Object)
// -> function(){} (empty function)

const email ='j';
if(email){
    console.log('True');
}

//Truthy and Falsy caveats
const children = 2;
const children1 = 0;

if(children){
    console.log(`you have ${children} children`);
} else{
    console.log('Please enter number of children');
}

if(children1 !== undefined){
    console.log(`you have ${children1} children`);
} else{
    console.log('Please enter number of children');
}
//  OR
if(!isNaN(children1)){
    console.log(`you have ${children1} children`);
} else{
    console.log('Please enter number of children');
}

//Checking for Empty Arrays
const posts = [];

if(posts){
    console.log('Yes');
}
else{
    console.log('No');
}

//Checking for empty objects
const user = {};
if(user){
    console.log('Yes');
}
else{
    console.log('No');
}
if(Object.keys(user).length > 0){     //gives an array of keys
    console.log('Yes');
}
else{
    console.log('No');
}


//Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

//Solution
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);


//Logical Operators
// && 
// ||

// && <- will return first falsy value or the last truthy value
let a ;
a = 10 &&  0 && 30;
let b = 10 && '' && 0 && 30;
console.log(a);
console.log(b);

const posts1 =['hj'];

posts1.length > 0 && console.log(posts1[0]);
posts1.length > 0 && posts1[0];

const posts2 =[];

posts2.length > 0 && console.log(posts2[0]);
posts2.length > 0 && posts2[0];
  
// || <- return the first truthy value or the last value (for all false values)

let bj = 10 || 20;
let bk = 0 || null || undefined;

console.log(bj);
console.log(bk);

// ?? <- returns the right side operand when the left is null('') or undefined 

let c;
let ed;
c = 10 ?? 20;
ed = undefined ?? 20;
console.log(c);
console.log(ed);


// LOGICAL ASSIGNMENT
// !!= assigns the right side value only if the left is a falsy value
let ab = false;

// if(!ab){
//     ab = 10;
// }

//Shorter Version
ab = ab || 10;     //<-(1)

ab ||= 10;         //<-(2)
console.log(ab);


// &&=  assigns the right side value only if the left is a truthy value

let cd = true;
// if(cd){
//     cd = 20;
// }

//Shorter Version
cd = cd && 20;   //cd is truthy

cd &&= 30;         //cd is twenty which is truthy(bcoz of earlier operation)
console.log(cd); 



// ??=  assigns the right side value ONLY IF the left is null or undefined
let gf = undefined;

// if(gf === undefined || gf === null){
//     gf = 70;
// }
// console.log(gf);

//Shorter Version

let df = undefined;

df = df ?? 40;

df ??= 50;
console.log(df);

//TERNARY OPERATOR
let age = 20;

if(age >= 18){
    console.log("Can vote");
}
else{
    console.log("Cant vote");
}

//Using ternary
age >= 18 ? console.log('Can Vote'):console.log("Cant  vote"); 

//Assigning value 
const tick = age >= 18 ? true : false;

console.log(tick);

//MULTIPLE STATEMENTS

const auth = true;
let redirect;
if(auth){
    alert('Welcome to the dashboard');
    redirect = '/dashboard';
}
else{
    alert('Access Denied');
    redirect = '/login';
}
console.log(redirect);

//Using ternary
const red = auth 
    ? (alert('Welcome to the dashboard'),'/dashboard')
    : (alert('Access Denied'),'/login');

    console.log(red);

    auth ? console.log('Welcome to the dashboard') : null;