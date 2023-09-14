// let myString = 'hello world';

// let myNewString;
// myNewString = myString[0].toUpperCase() + 
// myString.substring(1);   //myString.length = 11 ut substring function excludes 11
// console.log(myString);
// console.log(myNewString);

// // myNewString 

// console.log(myNewString);





//section 4
//simplest function
function sayHello(){             //defining
    console.log('hello World');
}
sayHello();          //invoking
//difference between parameters and arguments

function add(num1, num2){         //parameters
    console.log(num1 + num2);
}

add(5,20);                        //arguments

function subtract(num1, num2){
    return num1 - num2;

    console.log('After this return'); //nothing will happen
}

subtract(10, 40);


function registeruser(user = 'Bot'){   //for default oarams(2 way)
    if(!user){
        user = 'Bot'                   //for default values(1 way)
    }
    return user + " is registered";
}
console.log(registeruser());


//rest params
function sum(...numbers) {         //rest operator => ...
    let total = 0;
    

    for(const num  of numbers){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3));          // gives an array 

//Objects as params

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;

}

const user = {
    id: 1,
    name: 'bhumil',
};

console.log(loginUser(user));


console.log(loginUser(
    {
    id: 2,
    name: 'Sarah'
    }
));


//Arrays as params

//get a random number from a specific array we pass in

function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}
getRandom([1,2,3,4,5,6,7,8]);


function getrandom(...arr){                        //using rest operator
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}
getrandom(1,2,3,4,5,6,7,8);


//global and  local variables

                       //browser has a window object 
window.alert('hueee');            //if window.alert is the topmost line u can use directly alert();
console.log(window.innerHeight);
console.log(window.innerWidth);   ///? innerWidth vs window.innerWidth

 let name = ' bhumil';

 function print(){
    var r = 'hdfjkg';
    let b = 'jdfljlhgld';
    console.log(name);
 }


 print();

//  console.log(b);
//  console.log(r);
 

 const x = 0;

 function add(){
    const x = 1;      //this overwrites the global var x(variable shadowing)
    const y = 100;
    console.log(x + y);
 }

 add();

 //Block Scope

 const z = 100;

 if(true){
    const y = 200;
    console.log(z + y);
 }

 //console.log(z + y);   <= throws an error

 for(let i = 0; i <= 10; i++){
    console.log(i);
 }

//  Difference between var, let and const

if(true) {
    const a =  500;
    let x45 = 45;
    var pg = 6879;              //global scope
}
console.log(pg);
// console.log(x45);           <= throws an error 

for(let i = 0; i  <= 10; i++){
    var akkad = 19;
}
console.log(akkad);

function run(){
    var d = 100;             //var in a function has its scope in the function only
    console.log(d);
}

// console.log(d);              <= throws an error

var bar = 2;           //gets added to the window object(type: window in console)


// Nested Scope (Functions and Blocks)

//function in function
//parent function cant access child function variables

function first(){
    const abc = 100;

    function second(){
        const bcd = 200;
        console.log(abc + bcd);
    }
    // console.log(abc);     <=  throws an error
    second();
}
first();


if(true){
    const ph = 100;

    if(ph === 100){
        const g = 260;
        console.log(ph + g);
    }
    // console.log(g);      <= throws an error
}


//creating a functon with function expression
console.log(addDollarSign(10));   //<= works (hoisitng)
//Function Declaration
function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(100));

// console.log(addPlusSign(200));   //<= gives error


//Function Expression
const addPlusSign = function(value){
    return '+' + value;
};

console.log(addPlusSign(200));


//hoisting is the process of moving all the functions and 
//variable declarations before the top of the current scope
//before the code is run


//arrow functions(compact, implicit return)
// function add2(a, b){
//     return a + b;
// }

// => above function as arrow function

const adb = (a, b) => {
    return a + b;
};


//shorten the above

const subm = (a, b) => a - b;  //implicit return(no return keyword is used)

const double = a => a * 2;   //if only one parameter then no parenthesis necessary
                             //wont work with more than one parameters


//Returning an object 


console.log(adb(1, 2));

console.log(subm(10, 2));

console.log(double(10));

//returning an object
const createOj = () => ({    //you need to wrap the curly 
                            //braces in parenthesis
    names : 'Brad',
})
console.log(createOj());


const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function(n){      //take function as param
    console.log(n);
});

//OR

numbers1.forEach(n => console.log(n));  //Array function in a callback(fn into another fn)


//Immediately Invoked function Expressions


 




