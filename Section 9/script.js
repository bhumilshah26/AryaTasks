/*
Doubts:




*/


/*

ADDING ITEMS TO THE LIST

*/

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false; 
// const items = itemList.querySelectorAll('li');   // <--- since this is const its value wont change

function onAddItemSubmit (e) {
    e.preventDefault();

    const newItem = itemInput.value
    // Validate Input
    if(newItem === ''){
        alert('Please add an item');
        return;
    }
    //Check for edit mode
    if(isEditMode){
       const itemToEdit = itemList.querySelector('.edit-mode');

       removeItemFromStorage(itemToEdit.textContent);

       itemToEdit.classList.remove('edit-mode');
       itemToEdit.remove();

       isEditMode = false;
    }
    else{
        if(checkIfItemExists(newItem)){
            alert('Item Exists');
            return;
        }
    }
    // Create item DOM element 
    addItemToDOM(newItem);

    // Add item to local storage
    addItemToStorage(newItem);
    checkUI();

    itemInput.value = '';
}


function addItemToDOM(item){
    //Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    
    //Add li to the DOM

    itemList.appendChild(li);
}


function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}
// localStorage.clear();
function addItemToStorage(item){
    const itemsFromStorage = getItemsFromStorage();

    // Add new item to array
    itemsFromStorage.push(item);

    //Convert to JSON String and store to local storage
    localStorage.setItem('items',JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage(item){
    let itemsFromStorage;

    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }
    else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}


/*

DELETING ITEMS FROM THE LIST USING THE ICON BUTTON
(Event Delegation)

*/
function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
    removeItem(e.target.parentElement.parentElement);
}
else {
    setItemToEdit(e.target);
}
}

function checkIfItemExists(item){
    const itemsFromStorage = getItemsFromStorage();

    // ---> one way of doing it
    // if(itemsFromStorage.includes(item)){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return itemsFromStorage.includes(item);
}

function setItemToEdit(item){
    isEditMode = true;
    // item.style.color = '#ccc';

    itemList.querySelectorAll('li').forEach(item => item.classList.remove('edit-mode'))
    item.classList.add('edit-mode');
    formBtn.innerHTML = `<i class="fa-solid fa-pen"></i>
    Update Item`;
    formBtn.style.backgroundColor = '#228B22'
    itemInput.value = item.textContent;
}

function removeItem (item) {   
    // e.target.remove(); <--- this will remove the x button
    if(confirm('Are You Sure?')){

        //Remove from DOM
        item.remove();

        //Remove item from Storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }   
}

function removeItemFromStorage(item){

    let itemsFromStorage = getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter(i => i !== item);

    // Re-set to localStorage
    localStorage.setItem('items',JSON.stringify(itemsFromStorage));
}

/*

Clear all Button

*/

function clearAll(e) {
    // itemList.innerHTML = '';  <--- one method
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }


    // Clear from local storage
    localStorage.removeItem('items');
    checkUI();
}


/*

Clear UI State (Dont show the filter items or the clear all button)

*/

function checkUI() {
    itemInput.value = ''

    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';  
    }

    formBtn.innerHTML = '<i class = "fa-solid fa-plus"></i>  Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;
}


/*

Filter Items

*/
function filterItems (e) {

    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLocaleLowerCase();
      if(itemName.indexOf(text) != -1){
        item.style.display = 'flex'
    }
    else {
        item.style.display = 'none';
    }
    });

   
}


/* 

LocalStorage and SessionStorage

- Property of the Window Object
- Data is stored in the browser
- Data is stored as key/value pairs and values are strings(can not store objects)
-Same API and same methods

Difference:

- Local Storage does not expire and Session storage lasts as long as the page is open
- Local Storage expires only when you set it to expire
- Local Storage should not be used for sensitive data <--- passwords, bank info

LocalStorage Methods
localStorage.setItem('name','Brad');
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear()'\;


Go to local storage
console wale tab par click karke ---> application ---> (under storage) Local Storage ---> http wala opt
*/

/*

localStorage.setItem('name','Brad'); // <--- won't go away
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
localStorage.clear();

*/

/*

Add item to Local Storage
- we want item to save to local storage
- we want also to remove it from local storage when deleted
- fetch from local storage
- stringfy array with json.stringfy method
- fetched using json.parse

*/

/*

Display from Local Storage

*/
function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}

// InitializeApp

// Event Listeners
function init () {
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click',clearAll);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();          // <--- when in global scope it only runs when the page loads
}

init();

/*

UPDATE THE EXISTING ITEM <--- onClickItem function and setItemToEdit function

*/

/*

UPDATE AND RESET STATE <--- setItemToEdit function

*/

/*

PREVENT DUPLICATE ITEMS

*/






