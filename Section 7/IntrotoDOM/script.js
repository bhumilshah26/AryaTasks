//DOCUMENT OBJECT MODEL(DOM)
//DOM <--- programming interface for web and html elements

// console.log(window);

// console.log(window.document);        // <-- gives html code(script tag placement is important)

// console.dir(window.document);       // <-- gives document properties

// console.log(document.body.innerText);


// document.body.innerHTML = '<h1>SECTION7</h1>';

// document.write('Hello');                // <-- it just adds to the current document

 //Methods to select certain elements in the DOM
 //HTML
//To get element by ID(name)
console.log(document.getElementById('main')); 

const main = document.getElementById('main');
// main.innerHTML = '<h1>SECTIONB</h1>';        // <--- replaces everyting having that id of 'main' wiht this 'SECTIONB


//Query Selector
document.querySelector('#main h1').innerText = 'Hello Section 7';   //<--- just changes the elements with id: 'main' and having h1 tag in it

//Document Element Properties
