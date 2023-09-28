// window.onload = function (){

//     document.querySelector('h1').textContent = 'Hoy';
// };

// window.addEventListener('load',() => {

//     document.querySelector('h1').textContent = 'PAGE LOADED';
//     console.log('Page Loaded');
// });
// window.addEventListener('DOMContentLoaded',() => {

//     document.querySelector('h1').textContent = 'DOM LOADED';
//     console.log('DOMContentLoaded');
// });

// console.log('Run Me');
window.addEventListener('resize',() => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

// difference between load and DOMContentLoaded is that 
// load waits for the entire page to load including all resources such as images
// where dom content loadded runs as soon as the DOM is parsed and loaded

// document.querySelector('h1').innerText = 'Hello Amigos';

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if(window.scrollY > 200){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});


window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => 
        p.style.color = 'blue'
        )
});

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => 
        p.style.color = 'black'                 // <--- window se bahar nikla toh change hoga ye 
        )
});

