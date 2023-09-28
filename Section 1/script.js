//const user = 'John'; =>since user is already defined in otherscript

//Hence do
(function(){
    const user = 'John';  //this is not in the global scope
    console.log(user);

    const hello = () => console.log('Hello');   //local scope
    hello();
})();   //the second parenthesis is to invoke the function 

// hello(); => wont work



(function (name){                           //if any param is to be given it is given in
    console.log("Hi " + name);
})('Bhumil');                               //this

//you can have name of Immediately invoked funtion expression

(function hello(){
    console.log('Hello');
})();


//FUNCTION CHALLENGES
//1
const getCelsius = F => (F - 32) * (5 / 9);

console.log(`The temperature is ${getCelsius(82)} \xB0C`); // (/xB0 <= degrees)


//2
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr); //spread operator

    return {
        min,  //since var name is same as the key name 
        max
    };
}
const nums = [1,2,3,4,5];
console.log(minMax(nums));

//3
(function(length, width){
    console.log('The area of rectangle with length '+length+' and width '+width+' is '+length*width);
})(10, 20);

//Execution Context is something behind the scenes

// when any js is ran a special env is created 
// this involves the transformation and execution of code
//two contexts => global and function execution context

//thread of execution => single threaded language =>interpreter and executes line by line
//there are async capabilities

// memory creation phase(vars and fncs stored) and execution phase(thread)
// in memmory creation phase
// => creates global object(browser = 'window')
// => creates the 'this' to the object
// =>setup memory heap for storing variables and function references
// =>store fns and vars in global execution context and set to undefined(only vars is undefined fns' whole code is stored)



//Execution phase
// =>line by line execution
// =>create a new execution context for each function call
// =>values to these above stored vars is given when the code is executed


// =>path to (sources tab in web browser)


