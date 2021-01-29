import {AddCatalog} from '../../components/catalog/catalog.js'
import Cart from '../../components/cart/cart.js'
import Contacts from '../../components/contacts/contacts.js'
import data from '../../api.js'
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./style/style.css">');

const linkData = [{name: 'home', component: AddCatalog}, 
                  {name: 'cart', component: Cart},
                  {name: 'contacts', component: Contacts}]

let products = [];
data().then(result => {
    products = result;
    console.log(products);
});


const nav = document.createElement('nav')

linkData.map(linkName => {
    const link = document.createElement('li')
    link.innerHTML = linkName.name
    link.addEventListener('click', () => {
        location.hash = linkName
        linkName.component(products)
    })
    nav.appendChild(link)
})

const iconCart = document.createElement('i');
iconCart.classList.add('icon-shopping-cart');
nav.appendChild(iconCart);

document.body.appendChild(nav)