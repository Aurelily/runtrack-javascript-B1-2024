document.addEventListener("DOMContentLoaded", (event) => {

    let p = document.createElement('p');
    let body = document.querySelector('body');
    let button = document.querySelector('#button');
    
    button.addEventListener('click', () => {
        fetch('expression.txt')
        .then((response) => response.text())
        .then((response) => {
            let innerText = document.createTextNode(response);
            body.appendChild(p);
            p.appendChild(innerText);
        })
    })

})