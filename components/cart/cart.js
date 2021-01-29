export default function () {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const cart = document.createElement('section');
    cart.innerHTML = '<h3>Cart</h3>';
    cart.classList.add('container');
    document.body.appendChild(cart);
}