// // Node-name <--- gives the html tag the element is in
// //ELEMENT NODES(ANY HTML TAG ON PAGE)
// // Traversing the DOM(look at the relationships between element nodes)
// // Everything in the DOM is a node(There are 12 node types-->(ex:Element, Attr, Text, Entity, EntityReference))

// //ALL THIS LOC TILL 45 WORK ONLY WITH ELEMENT NODES
// let output;

// //Get child elements

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// //Access first and last elements
// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// // Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// //Sibling Elements
// const secondChild = document.querySelector('.child:nth-child(2)');

// output = secondChild;
// output = secondChild.nextElementSibling;

// secondChild.nextElementSibling.style.color = 'green';
// secondChild.previousElementSibling.style.color = 'orange';


// console.log(output);

// Traversing the DOM (Nodes)
//DOM Node Relationships
/* 

Here, text nodes are spaces in the HTML document after every div

*/
// let output;

// const parent = document.querySelector('.parent');

// output = parent.childNodes;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[0].textContent;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[0].nodeName;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[3].textContent;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[3].innerHTML;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[3].outerHTML;         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)

// output = parent.childNodes[3].innerHTML = 'Child One';         // <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)
// output = parent.childNodes[5].style.color = 'red';// <--- gives a node list(here empty space is counted as text node which is there in the beginning of this html file)

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = 'Hello';


// //Parent nodes from child

// const child = document.querySelector('.child');

// output = child.parentNode;
// // output = child.parentElement;
// output = child.parentNode.style.backgroundColor = 'blue';
// output = child.parentNode.style.padding = '20px';

// // Siblings
// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem;
// output = secondItem.previousSibling;

// console.log(output);

/*

Create And Append Elements 

*/
// const div = document.createElement('div');

// //add Attributes
// div.className = 'my_jselement';
// div.id = 'my_jselement';
// div.setAttribute('title','My Element'); // <--- setAttribute takes two params Attr_name and Attr_value


// // div.innerText = 'Hello World';  // <--- not a good way

// const text = document.createTextNode('Hello world');

// div.appendChild(text);    // <--- very important

// document.body.appendChild(div); //<--- this is when it is added to the html doc

// //Position the created element
// document.querySelector('h1').appendChild(div);
// document.querySelector('.child').appendChild(div);

// console.log(div);



// /*

// innerHTML vs createElement

// */
// //Quick & Dirty <--- innerHTML
// function createListItem(item){
//     const div = document.createElement('div');   //<--- this has to be a node 

//     div.innerHTML = `${item}`
//     document.body.appendChild(div);   // <--- this cannot be taken as a string it requirs node param
// }



// //Clean & Performant <--- creating all elements
// function createNewListItem(item){
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(item));

//     const text_search = document.createElement('input')
//     div.appendChild(text_search);

//     document.querySelector('.child:nth-child(2)').appendChild(div);
// }       

// // function to include a new item in the shopping list


// createListItem('Eggs');
// createNewListItem('Cheese');

// // Refactor to Multiple Functions(Create function for each task)

// //Insert Elements, Text and HTML
// /**

// All the method below take a position from the four given below
// <!-- beforebegin -->
// <p>

//  */
// //insert
// function insertElement(){
//     const element = document.querySelector('.child');

//     const h1 = document.createElement('h1');   //<--- give the element name in the parenthesis
//     h1.textContent = 'insertAdjacentElement';

//     element.insertAdjacentElement('afterend',h1);
// }


// function insertText(){
//     const item = document.querySelector('li:nth-child(2)');   // <--- no index only number

//     item.insertAdjacentText('afterend','adjacent-text');
// }

// function insertHTML(){
//     const clearBtn = document.querySelector('li:nth-child(1)');

//     clearBtn.insertAdjacentHTML('afterend','<h3>Hello motherfather</h3>')
// }

// //insertBefore() function is predefined <--- you call it on the parent tag
// // there is no insert after
// function insertBeforeItem(){
//     const ul = document.querySelector('ol');
    
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';
    
//     const thirdItem = document.querySelector('li:nth-child(3)')
//     ul.insertBefore(li,thirdItem);
// }
// insertElement();
// insertText();
// insertHTML();
// insertBeforeItem();


// //Solution 1(which i thought)
// function insertAfter(insert_element, after_element){
   
//     after_element.insertAdjacentElement('afterend',insert_element);
// }

// const li = document.createElement('li');
// li.textContent = 'insertAfter';

// const firstItem = document.querySelector('li:first-child');

// insertAfter(li,firstItem);

// //Solution 2(which he gave)
// function insertAFTER(new_El, existing_El){
//     existing_El.parentElement.insertBefore(new_El,existing_El.nextSibling);
// }

// const lst = document.createElement('li');
// lst.textContent = 'insertAFTER';

// const firstItem1 = document.querySelector('li:first-child');

// insertAFTER(lst,firstItem1);



// ReplaceElements in the DOM

// Using replaceWith() function <--- takes argument as the element which is to be put

// function replacefirstItem(){
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Replace First Item';

//     firstItem.replaceWith(li);
// }

// // outerHTML includes tags too innerHTML doesnt
// function replaceSecondItem(){
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Replace Second Item</li>' 
// }

// function replaceAllItems(){
//     const lis = document.querySelectorAll('li');

//     lis.forEach((lst_item,index) => {
//         lst_item.outerHTML = `<li>list item ${index + 1}</li>`;
//     });
// }
// function replaceChildHeading(){
//     const header = document.querySelector('ol');
//     const h1 = document.querySelector('li:first-child');

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shop';

//     header.replaceChild(h2, h1);  //(new_item, Item_to_be_replaced)
// }
// replacefirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();
//Loop through all the li's and change its outerHTML

//Replacing by invoking the parent element and using replaceChild function





// Remove Elements
// remove(<---  called on element you want to remove) and removeChild(called on element parent and child is passes as argument which is to be removed) Methods

// function removefirstItem(){
//     const parent = document.querySelector('ol');
//     const li = document.querySelector('li:first-child');

//     parent.removeChild(li);
// }
    
// function removelistItem2(){
//     const clear = document.querySelector('li:nth-child(2)');
//     clear.remove();
// }
    // function removeItem(item_number){                               // <--- not an index but the number in the list
//     const parent = document.querySelector('ol');
//     const li = document.querySelector(`li:nth-child(${item_number})`);
//     parent.removeChild(li);
// }

// function removeItem2(item_number){                               // <--- not an index but the number in the list
//     const parent = document.querySelector('ol');
//     const li = document.querySelectorAll('li')[item_number - 1];
//     parent.removeChild(li);
// }

// function removeItem3(item_number){
//     const li = document.querySelectorAll('li');
//     li[item_number - 1].remove();

// }

// const removeItem4 = (item_number) => 
// document.querySelectorAll('li')[item_number - 1].remove();

// removeItem4(2);
// removeItem3(2);
// removeItem2(3);
// removeItem(2);
// removelistItem2();
// removefirstItem();


//Working with styles and classes
//Properties to manipulate css classes and css directly

// 99% when changing styles  or classes its going to be on some kind of event

const text = document.querySelector('li');
console.log(text);
text.classList.replace('child','hidden');
