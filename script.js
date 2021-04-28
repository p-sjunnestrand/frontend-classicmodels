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
    .then(data => {
        console.log(data);
        for(item in data){
            const productLineWrp = document.createElement('div');
            productLineWrp.classList.add('productLineWrp');

            const prodLineId = data[item].productLine.replace(/ /g, '');
            productLineWrp.id = prodLineId;

            const productLineHeader = document.createElement('h4');
            productLineHeader.innerHTML = data[item].productLine;
            productLineHeader.classList.add('productLineHeader');

            const productLineText = document.createElement('article');
            productLineText.classList.add('productLineText');
            productLineText.innerHTML = data[item].textDescription;

            productLineWrp.append(productLineHeader, productLineText);
            mainWrp.appendChild(productLineWrp);
            // mainWrp.insertAdjacentHTML('beforeend', data[item].productLine)
        }
        mainWrp.addEventListener('click', e => console.log(e.target.parentNode));
    })
}