let header = document.querySelector('header');
let buttons = document.querySelectorAll('nav button');

let blueButton = buttons[0];
let brownButton = buttons[1];
let greenButton = buttons[2];
let noneButton = buttons[3];

blueButton.addEventListener('click', () => {
    header.classList.add('blue-background', 'text-white');
    header.classList.remove('brown-background', 'green-background');
});
brownButton.addEventListener('click', () => {
    header.classList.add('brown-background', 'text-white');
    header.classList.remove('blue-background', 'green-background');
});
greenButton.addEventListener('click', () => {
    header.classList.add('green-background', 'text-white');
    header.classList.remove('blue-background', 'brown-background');
});
noneButton.addEventListener('click', () => {
    header.classList.add('white-background');
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});

console.log(blueButton);