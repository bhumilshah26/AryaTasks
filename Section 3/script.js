
let x;
//Array Literal
const numbers = [1, 2, 3, 4, 5];
console.log(numbers,typeof numbers);

//Array constructor 

const fruits = new Array('Apple', 'Mango', 'Grape', 'Orange');
console.log(fruits, typeof fruits);

const mixed = [12, 'hello', true , null];

x = numbers[0];

x = numbers[0] + numbers[3]; 

x = numbers.length;

fruits[1] = 'Banana' ;
// fruits[7] = 'Pear';        //o/p --> (8) ['Apple', 'Banana', 'Grape', 'Orange', empty × 3, 'Pear'] 
fruits[4] = 'Pear'; 
// fruits.length = 3;   //makes the length of the array as 3 so only first 3 elements left in array


console.log(fruits);
console.log(x);

//Basic Array Methods

const arr = [13, 24, 45, 32, 67];

// console.log(arr.__proto__);    <---all array methods list

arr.push(100);                     //item added at the last

arr.pop();                         //last item deleted

arr.unshift(99);                   //item added to the beginning of the array

arr.shift();                       //first element deleted

// arr.reverse();
// arr.reverse();
console.log(arr);

let y = arr.includes(136);

y = arr.indexOf(13); 

y = arr.indexOf(47);               //gives -1 if not present

// y = arr.slice(1, 100);               //(inclusive,exclusive)               //gives another array as(start_index, end_index)<---gives an array of (end_index-1)-start_index
                                    //if end_index is not given or if it is more than array_size then gives a subarray till the last 

// y = arr.splice(1, 4);                 //(start_index, no. of elements you want to traverse over) <-- removes the elements from the array          

// y = arr.splice(3, 1);


y = arr.splice(1, 4).reverse().toString().charAt(1);
console.log(y, arr);

//Nesting,concatenation and Spread operator
//NESTING<-- having an array as an index inside of another array

//Array 1
const fruit = ['Apple','Mango','Banana'];
const berries = ['Strawberry','Raspberry','Blueberry'];

// fruit.push(berries);

let b = fruit[3];

//  b = fruit[3][1];

console.log(b);

console.log(fruit);

const allfruits = [fruit,berries];          //it will add it as arrays(size: 2)

//eg to access strawberry
b = allfruits[1][0];
console.log(b);
console.log(allfruits);


//Concatenation <--taking items from one array to adding it to the other array
// b = fruit.concat(berries);

console.log(b);

//Spread Operator(...)(used with arrays and objects)
b = [...fruit,...berries];          //it will add the elements of arrays(size: 6)

//Flatten arrays
const arr3 = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr3.flat();

console.log(x);           //o/p ---> x = [1,2,3,4,5,6,7,8] 

console.log(arr3);

//Static methods on Array objects
x = 0;

x = Array.isArray(x);

x = Array.from('567');    // takes string input and gives array of indivi

const p = 1;
const q = 2;
const r = 3;

x = Array.of(p, q, r);

console.log(x);


//Array Challenges

let arr2 = [1, 2, 3, 4, 5];  
arr2.push(arr2[arr2.length - 1] + 1);
arr2.reverse();
arr2.push(arr2[arr2.length - 1] - 1);
console.log(arr2);


let arr4 = [1, 2, 3, 4, 5];  
arr4.push(arr4[arr4.length - 1] + 1);
arr4.unshift(arr4[0] - 1);
arr4.reverse();
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5];
const arr6 = [5, 6, 7, 8, 9, 10];

//solution 1
const arr7 = arr5.slice(0, 4).concat(arr6);
console.log(arr7);

//solution 2 
const arr8 = [...arr5,...arr6];
arr8.splice(4, 1);
console.log(arr8);

//Object Literals