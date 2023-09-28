/* 

Section 8: Events
clicking on an element
typing into a field
hovering over the element
submitting a form
closing a window
dragging an element
resizing an element

*/

// Event Listeners

//NOT RECOMMENDED METHOD ---> outting listener in the html file

// function need not to be called when using events the are automatically invoked when the event occurs

// function onClear(){
    //   alert('Cleared all items');  
    // }
// function onClear(){
//       alert('Cleared all items');  
//     }

// const clearBtn = document.querySelector('#clear');

/*

one event will occur((here,second one)the most current one) and both wont occur simultaneously
// clearBtn.onclick = function () {
//     alert('Clear items');
// };
    
    
// clearBtn.onclick = function () {
//     console.log('Clear items');
// };
*/

//addEventListener() <--- takes two arguments first => eventName second => arrow function
// Advantage: multiple events of the same name will all be ran
// clearBtn.addEventListener('click',() => alert('clear:'));
// clearBtn.addEventListener('click',onClear);
// clearBtn.addEventListener('click',() => console.log('clear:'));

//removeEventListener
// removeEventListener before doing removeChild
//setTimeout(function,time_in_ms) <--- asynchronous fn
// removeEventListener('event',function which which used in event listener)

// setTimeout(() => {clearBtn.removeEventListener('click',onClear)},5000);
// setTimeout(() => clearBtn.click() ,5000);

// function onClear(){
//     const itemList = document.querySelector('ul');

//     // itemList.innerHTML = '';    <--- first way of doing it
//     const items =itemList.querySelectorAll('li');

//     // items.forEach((item) => item.remove()); // <--- second way

//     while(itemList.firstChild){
//         itemList.removeChild(itemList.firstChild);
//     }
//   }
// clearBtn.addEventListener('click',onClear);

// MOUSE EVENTS

const logo = document.querySelector('img');

// // Event Listeners

// const onClick = () => console.log('click event');

// const onDoubleClick = () => {
//     if(document.body.style.backgroundColor !== 'purple')
//     {
//         document.body.style.backgroundColor = 'purple';
//         document.body.style.color = 'white';
//     }
//     else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// };


// const onRightClick = () => {console.log('right click event');};
// const onMouseDown =() => console.log('mouse down event');
// const onMouseUp =() => console.log('mouse up event');
// const onMouseWheel =() => console.log('mouse wheel event');
// const onMouseOver =() => console.log('mouse over event');
// const onMouseOut =() => console.log('mouse out event');
// const onDragStart =() => console.log('Drag start event');
// const onDrag =() => console.log('Drag event');
// const onDragEnd =() => console.log('Drag End event');
// logo.addEventListener('click',onClick);

// Events for buttons
// logo.addEventListener('dblclick',onDoubleClick);     // <--- on double clicking
// logo.addEventListener('contextmenu',onRightClick);    // <--- right click
// logo.addEventListener('mousedown',onMouseDown);     // <--- when you hold your mouse and dont leave it
// logo.addEventListener('mouseup',onMouseUp);    // <--- when you leave your mouse after holding it
// logo.addEventListener('wheel',onMouseWheel);   // <--- hovering on the item and then scrolling activates this event

// // Events for hovering (mouseover and mouseout)
// logo.addEventListener('mouseover',onMouseOver);   // <--- hovering on the item 
// logo.addEventListener('mouseout',onMouseOut);   // <--- hovering and then leaving on the item 

// //Drag Events
// logo.addEventListener('dragstart',onDragStart);   // <--- selecting the element and holding it and scrolling on the screen creates a copy of that element which hovers on the screen as you drag 
// logo.addEventListener('drag',onDrag);   // <--- just holding on the item (you may not be moving even so) (the faster you move the faster the event lays off) 
// logo.addEventListener('dragend',onDragEnd);  // <--- when you release the item you have been holding

// function onClick(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
//     // e.target.style.backgroundColor = 'black';
// }

//How is target and currentTarget different 
// logo.addEventListener('click', onClick); // <--- gives list of methods 
// document.body.addEventListener('click',function (e) {
//     console.log(e.target);    // <--- whatever you click on
//     console.log(e.currentTarget); 
//     console.log(e.type); 
//     console.log(e.timeStamp);
//     console.log(e.clientX); 
//     console.log(e.clientY); 
//     console.log(e.offsetX); 
//     console.log(e.offsetY); 
//     console.log(e.pageX); 
//     console.log(e.pageY); 
//     console.log(e.screenX); 
//     console.log(e.screenY); 
// })

// document.querySelector('a').addEventListener('click',(e) => {e.preventDefault(),console.log("link was clicked")});
// EVENT OBJECT (available to us when we add an eventlistener)
// logo.addEventListener('click', function(e) {
//     console.log(e);
// }); // <--- gives list of methods 

/*

METHODS:
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to
    (These are the same in this case)
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsety` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen

*/
// function onDrag(e){
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('drag',onDrag);

/*

Keyboard events and key properties

? ---> keyUp and keyPress Difference?
 
(ek pata chala ki it keydown backspace bhi as a key leta h and keypress backspace ko as a key nhi leta)


event Object Properties
key

keyCode

code
*/
// const itemInput = document.querySelector('#item-input');

// const onKeyPress = (e) => {
//     console.log('Keypress');
// };
// const onKeyUp = (e) => {
//     console.log('Key Up Event');
// };
// const onKeyDown = (e) => {
//     // console.log('Key Down Event');
//     //key
//     // console.log(e.key);   // <--- counts backspace too
//     document.querySelector('h1').textContent = e.key;
//     // if(e.key === 'Enter'){
//     //     alert("Tune daba dia");

//     if(e.keyCode === 13){
//         alert('You Pressed Enter');
//     }

//     if(e.repeat){
//         console.log('You are holding down' + e.key);
//     }
    
//     console.log('Shift: '+e.shiftKey);
//     console.log('Control: '+e.ctrlKey);
//     console.log('Alt: '+e.altKey);

//     if(e.shiftKey && e.key === 'K'){
//         console.log('You hit shift + K');
//     }
    //keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    // console.log(e.keyCode); //prints ascii values of characters (all keyboard keys including backspace)(eg when b is its ascii value 66 is consoled)

    //code
    // console.log(e.code);  //prints characters as KeyCharname and digits as Digit0,Digit2 and backspace as BackSpace control button as Control
// };

// itemInput.addEventListener('keypress',onKeyPress)
// itemInput.addEventListener('keyup',onKeyUp)
// itemInput.addEventListener('keydown',onKeyDown);


/*

Input Events

*/

// const itemInput = document.getElementById('item-input'); 
// const priorityInput = document.getElementById('priority-input'); 
// const checkbox = document.getElementById('checkbox'); 
// const heading = document.querySelector('h1'); 

// function onInput(e){
//     heading.textContent = e.target.value;            //e.key will be undefined since the eventlistener is inoput and not keypress/keyup/keydown
// }

// function onCheceked(e){
//     heading.textContent = e.target.checked;            //e.key will be undefined since the eventlistener is inoput and not keypress/keyup/keydown
// }

// function onFocus(e){
//     // heading.textContent = e.target.checked;            //e.key will be undefined since the eventlistener is inoput and not keypress/keyup/keydown
//     console.log('Input is Focused');
//     itemInput.style.outlineStyle = 'solid';
//     itemInput.style.outlineWidth = '1px';
//     itemInput.style.outlineColor = 'black';
// }

// function onBlur(e){
//     // heading.textContent = e.target.checked;            //e.key will be undefined since the eventlistener is inoput and not keypress/keyup/keydown
//     console.log('Input is blurred');
//     itemInput.style.outlineStyle = 'none';
// }

// itemInput.addEventListener('input', onInput);  //<--- keydown wont work for select tags but inout will work
// // priorityInput.addEventListener('input', onInput);  
// priorityInput.addEventListener('change', onInput); //<--- change works for event listeners
// checkbox.addEventListener('input', onCheceked); //<--- change works for event listeners

// itemInput.addEventListener('focus', onFocus);  
// itemInput.addEventListener('blur', onBlur);  



/* 

Form Submission and Form-Data Object

*/

// const form = document.getElementById('item-form');

// function onSubmit(e){
//     e.preventDefault();
//     //Get the values being submitted to the form(e.target.vallue method or form-data object method)
//     // const priority = document.getElementById('priority-input');
//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     if(item === '' || priority === '0'){
//         alert('Please fill all the fields');
//         return;
//     }

//     // console.log(item, priority.value);
//     console.log(item, priority);
//     // console.log('submit'); // <--- if you dont have backend they only when this stmt is present then it will submit to the same page
// }

// function onSubmit2(e){
//     e.preventDefault();

//     const formData = new FormData(form);
//     //get single entries
//     const item = formData.get('item');    //<--- item here is the name attribute in html
//     const priority = formData.get('priority');    //<--- priority here is the name attribute in html

//     // get all entries
//     const entries = formData.entries();  // <--- allows us through loop through it or iterate
//     console.log(entries);

//     for(let entry of entries){
//         // console.log(entry);   // <-- array like structure
//         console.log(entry[1]);
//     }
//     // console.log(item, priority);
// }


// form.addEventListener('submit',onSubmit2);

/* 

Event Bubbling
With bubbling the event is captured and
handled by the innermost element and then
propogated to outer elements

basically inheritance parent child ka relation 
*/
// const button =  document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(1)');
// // console.log(div);
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//     alert('Button was clicked');
//     e.stopPropagation();
// });

// div.addEventListener('click', () => {
//     alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//     alert('Form was clicked');
// });

// document.body.addEventListener('click',() => 
// {
//     alert('Body was clicked')
// });

// stop propogation method comes in when you dont want this hierarchy of alert messages
// there's also a method called stop immediate propagation <--- not used here


/*

Event delegation and Multiple events

*/

//Event listener on multiple elements <--- event delegation <--- add single event listener onto the parent and then target the one which we want to select

// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul')
// Method 1
// listItems.forEach((item) => {
//     item.addEventListener('click',(e) => {
//         // console.log(e.target);
//         e.target.remove();
//     });
// });
// list.addEventListener('click',(e) => {
//     // console.log(e.target);   // <--- gives list items which is being clicked on and gives ul if clicked between the li
//     // console.log(e.currentTarget);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

// list.addEventListener('mouseover',(e) => {
//     // console.log(e.target);   // <--- gives list items which is being clicked on and gives ul if clicked between the li
//     // console.log(e.currentTarget);
//     if(e.target.tagName === 'LI'){
//         e.target.style.color = 'red';
//     }
// });
