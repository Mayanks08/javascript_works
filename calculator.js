// const display = document.querySelector('#display');
// const button =document.querySelectorAll('button');

// button.forEach((btn) =>{
//     btn.addEventListener('click', () =>{
//         if( btn.id === "=") {
//             display.value = eval(display.value);
//         } else if( btn.id ==="AC") {
//             display.value = "";
//         } else if (btn.id === "DE"){
//            display.value = display.value.slice(0,-1); 
//         } else{
//             display.value += btn.id;
//         }
//     });
// });
// improve version 
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        handleButtonClick(btn.id);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/[0-9+\-*/.=]|Backspace|Delete/.test(key)) {
        handleButtonClick(key);
    } else if (key === "Enter" || e.keyCode === 13) {
        handleButtonClick("=");
        e.preventDefault(); // Prevent the default form submission behavior
    }
});

function handleButtonClick(key) {
    if (key === "=") {
        display.value = eval(display.value);
    } else if (key === "AC") {
        display.value = "";
    } else if (key === "DE" || key === "Backspace" || key === "Delete") {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += key;
    }
}