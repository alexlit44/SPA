export default function () {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const contacts = document.createElement('section');
    contacts.classList.add('container');
    contacts.innerHTML = `
        <h3>Contacts</h3>
        <p>Tel. 0934820934</p>`;
    document.body.appendChild(contacts);
}