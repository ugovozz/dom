// Get access to DOM elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
const addPost = document.getElementById('add-post');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

addPost.addEventListener('click', () => {
    createNewPost();
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});

function createNewPost() {
    let newArticle = document.createElement('article');
    let newH5 = document.createElement('h5');
    let newP = document.createElement('p');

    newH5.textContent = "A Second Blog Post";
    newP.textContent = "ll over living room carpet while humans eat dinner nya nya nyan. Attack the child groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool.Hide at bottom of staircase to trip human. Ask for petting. Roll on the floor purring your whiskers off. Trip on catnip nap all day, eat too much then proceed to regurgitate ";

    newArticle.appendChild(newH5);
    newArticle.appendChild(newP);
    newArticle.classList.add('list-group-item');
    let section = document.querySelector('main section');
    section.appendChild(newArticle);
}