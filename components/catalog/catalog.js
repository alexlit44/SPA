export function AddCatalog(products) {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const catalog = document.createElement('section')
    catalog.classList.add('container')
    catalog.classList.add('catalog-container')
    products.map(item => {
        const add = document.createElement('span')
        add.innerHTML = '+'
        catalog.appendChild(add)
        catalog.insertAdjacentHTML('beforeend', `<div> ${item.title} <p>${item.price}</p> <p>${item.description}</p></div>`)
    })
    document.body.appendChild(catalog)
}