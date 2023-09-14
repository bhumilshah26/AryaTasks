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

function first(){
    console.log("First");
    second();
}
function second(){
    console.log("Second");
    third();
}
function third(){
    console.log("Third");
}
first();