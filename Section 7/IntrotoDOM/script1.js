let output;


// when we do document.(images/forms/etc...) <--- we get an HTML collection which is array-like we can access it using index but array methods wont work on this
output = document.all;      // all <--- depricated
output = document.all[10];     //<-- gves the 11th line from the document
output = document.all.length;     //<-- gves the 11th line from the document

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;                // <---gives only direct relation children
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;


output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
// console.log(output);
output = document.forms[0].action;
// console.log(output);


// change the id using js
document.forms[0].id = "new-form";
output = document.links;
output = document.links[0];
output = document.links[0].href = "https://www.youtube.com/";
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList; // <--- any classes on that element will be on this list 



output = document.images[0].src;
console.log(output);

// if you want to use array methods u have to convert it into an array
// example:
const form = Array.from(document.forms);
form.forEach((form) => (console.log(form)));




//Methods to select more easily from the DOM
//DOM Selecors - Single Elements
//document.getElementById
console.log(document.getElementById("title"));
console.log(document.getElementById("title").id);
console.log(document.getElementById("title").className);
console.log(document.getElementById("title").getAttribute('id'));

//Set Attributes
// document.getElementById('title').id = 'newid';
// document.getElementById('title').title = 'Shopping List';

document.getElementById('title').setAttribute('class','title');

//you put the function in a variable to avoid typing it again (ex: )
const title = document.getElementById('title');
console.log(title);

// Get/change the content within that element
console.log(title.textContent);     // <--- gives content in that

// There is a difference between these two but he wont be getting into it right now
title.textContent = 'Rowdy';
title.innerText = 'ROWDI';  
title.innerHTML = '<strong>Shopping List</strong>'

// Change style (edit styles on a static page)
title.style.color = 'red';
title.style.backgroundColor = 'blue';
title.style.padding = '10px'; 
title.style.borderRadius = '10px';

// document.querySelector()    <--- selects the first one in the html document
console.log(document.querySelector('h1')); // <-- select a class or id mainly
console.log(document.querySelector('#title'));
console.log(document.querySelector('.container'));

//Selecting by attributes(ex: input having the type text)
console.log(document.querySelector('input[type="text"]'));
//Pseudo Selectors
console.log(document.querySelector('li:nth-child(2)').innerText);    // <--- gives the first list item(NO INDEX DIRECT VALUE)

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements other than the document(like querySelector can be used on variables too)
const list = document.querySelector('ol');
console.log(list);
console.log(list.querySelector('li'));


// Selecting multiple items
// querySelectorAll() <--- 100% of the time(Gives Node-List)
const listItems = document.querySelectorAll('.items');
console.log(listItems);    // <--- gives a node list which is an array like structure(indices apply here) 
console.log(listItems[1].innerText); 

// listItems.style.color = 'red';   <--- wont work since style is being ran on node list
// listItems[2].style.color = 'red';
// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if(index === 5){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerText ='Oranges';    // <--- you have to take care of the other tags that may be present in this 
//     }


// });



/*
NOTE:
1) You can use higher order array methods on a 
NODE List but not on a HTML collection
(you'll have to convert it to an array using Array.from() method)

2) Both are array-like and both can be traversed using
*/

//document.getElementByClassName('') <--- gives an HTML Collection
const listItems2 = document.getElementsByClassName('items');
console.log(listItems2[2].innerText);

//THROWS AN ERROR SINCE listitems2 is not a function
// listItems2.forEach((item) => {
//     console.log(item);
// });
console.log('');

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
    console.log(item.innerText);
});
console.log('');
//getElementByTagName('tags_name') <--- gives an HTML Collection
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[2].innerText);





