//ELEMENTS

const updateButton = document.getElementById('update');
const table = document.querySelector('table');
const tbody = document.querySelector('table tbody');


// FONCTION QUI RECUPERE LES DATAS DU JSON

async function getData(){
    await fetch('users.json')
    .then( (response) => response.json() )
    .then( (response) => {
        /* console.table(response); */
        

        // Vide le contenu du tbody s'il existe déjà
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        table.appendChild(tbody);

        for(let i = 0; i<Object.keys(response).length ;i++){
            let tRow = document.createElement('tr');
            tbody.appendChild(tRow);
            let data = (response[i]);
            console.log(data);
            
            Object.keys(data).forEach(function(key) {
                let tDiv = document.createElement('td');
                tDiv.innerHTML = JSON.stringify(data[key]);
                tRow.appendChild(tDiv);
                /* console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key])) */
            })
        }
    }) 
}

// APPEL DE LA FONCTION A L'OUVERTURE DE LA PAGE

/* getData(); */

// UPDATE APPEL DE LA FONCTION AU CLIC SUR LE BOUTON

updateButton.addEventListener('click', () => {
    
    getData();
})