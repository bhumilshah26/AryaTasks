// // my way

// const key = document.querySelector('div .key');

// const keyCode = document.querySelector('div .key').nextElementSibling;

// const code = document.querySelector('div .key').nextElementSibling.nextElementSibling;


// const onKeyPress = (e) => {
//     key.innerHTML = `<div>
//     ${e.key}
//     <small>e.key</small>
//     </div>`
// };

// const onKeyCode = (e) => {
//     keyCode.innerHTML = `<div>
//     ${e.keyCode}
//     <small>e.keyCode</small>
//     </div>`
// };

// const onCode = (e) => {
//     code.innerHTML = `<div>
//     ${e.code}
//     <small>e.code</small>
//     </div>`
// };
// addEventListener('keypress',onKeyPress);
// addEventListener('keypress',onKeyCode);
// addEventListener('keypress',onCode);

// Method 1
// window.addEventListener('keydown',(e) => {
//     const insert = document.querySelector('#insert');

// insert.innerHTML = `<div class="key">
// ${e.key === ' '?'Space':e.key}
// <small>e.key</small>
// </div>

// <div class="key">
// ${e.keyCode}
// <small>e.keyCode</small>
// </div>

// <div class="key">
// ${e.code}
// <small>e.code</small>
// </div>`;

// }
// );

//Method 2
function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML ='';
    const keyCodes = {
    'e.key': e.key === ' '?'Space':e.key,
    'e.keyCode':e.keyCode,
    'e.code':e.code,
};

// console.log(keyCodes);
for(let key in keyCodes){
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
    
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);
    insert.appendChild(div);
    
}
}
window.addEventListener('keydown',showKeyCodes);