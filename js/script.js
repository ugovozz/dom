// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';

header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newH3 = document.createElement('h3');
let newParagraph = document.createElement('p');

newH3.textContent = "Article 004";
newParagraph.textContent = "Ask to be pet then attack owners hand jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water or meowzer,";

newArticle.appendChild(newH3);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2');
newArticle.classList.add('p-2');
newArticle.classList.add('border');
newArticle.classList.add('border-secondary');

newArticle.id = "art-004";

let mainTag = document.querySelector('main');

mainTag.appendChild(newArticle);