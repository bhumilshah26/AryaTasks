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