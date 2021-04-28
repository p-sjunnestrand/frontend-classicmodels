console.log('hello world!');
const navBar = document.getElementById('navBar');
const navBarUl = document.getElementById('navBarUl');
const navStart = document.getElementById('navStart');
const navProducts = document.getElementById('navProducts');
const navContact = document.getElementById('navContact');

const mainWrp = document.getElementById('mainWrp');

navProducts.addEventListener('click', () => {
    console.log('click!');
    productsPage();
})


function productsPage () {
    mainWrp.innerHTML = '';
    fetch('http://localhost:3000/products/')
    .then(response => response.json())
    .then(data => console.log(data))
}