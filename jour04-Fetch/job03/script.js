document.addEventListener("DOMContentLoaded", (event) => {
    
    //DATA

    //create select const to append options
    const select = document.querySelector('select');
    const button = document.querySelector("input[value=filtrer]");
    const id = document.querySelector('input[name=id]');
    const nom = document.querySelector('input[name=nom]');
    const body = document.querySelector('body');

    //create set so as to avoid having double values
    let typeSet = new Set()

    //inject into select
    getData();


    //FUNCTIONS
    async function getData () 
    {        

        // Utilise l'API Fetch pour récupérer le contenu du fichier pokemon.json.
        // L'opérateur await permet d'attendre que la promesse retournée par fetch soit résolue.

        await fetch('pokemon.json')
        // On chaîne la promesse avec la methode then().
        // Lorsque la réponse est obtenue, elle est convertie en JSON à l'aide de la méthode json().
 
        .then((response) => response.json()) 
        .then((response) => {
            console.table(response);
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {   
                //setting a variable containing the field type of each 'object' in the Json file
                let temp = response[i].type;
                /* console.log(temp); */

                //iterate over the variable because it is an array that can contain multiple values
                for( let y = 0; y < temp.length;y++)
                {
                    //add value to set, avoiding duplicate values
                    typeSet.add(temp[y]);
                    
                }                
                
            }          
            
        })
        .then(() => {
            //convert set to array
            let typeArr = Array.from(typeSet);           

            //iterate over type array to add option to select
            for(let i=0; i <typeArr.length;i++)
            {
                let option = document.createElement('option')
                option.value = typeArr[i];
                option.text = typeArr[i];
                select.appendChild(option);
            }
        });
    }
    
    function getPokemonsById(id)
    {
        fetch('pokemon.json')
        .then((response) => response.json())
        .then((response) => {

            let count = 0;
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {   
                
                if (response[i].id == id)
                {
                    let data = (response[i]);
                    Object.keys(data).forEach(function(key) {
                        let pre = document.createElement('pre');
                        pre.innerHTML = key + ' : ' + JSON.stringify(data[key]);
                        body.appendChild(pre);
                        console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key]))
                    })
                    count++;
                }
            }

            if (count == 0)
            {
                let pre = document.createElement('pre');
                    pre.innerHTML = "Il n'y a pas de pokemon avec cet Id !"
                    body.appendChild(pre);
            }
        })
    }

    function getPokemonsByName(name)
    {
        fetch('pokemon.json')
        .then((response) => response.json())
        .then((response) => {

            let count = 0;
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {   
                let data = (response[i].name);
                try 
                {
                    Object.keys(data).forEach(function(key) {
                        if(data[key] == name)
                        {
                            console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key]))
                            let data2 = (response[i]);
                            Object.keys(data2).forEach(function(key) {
                                let pre = document.createElement('pre');
                                pre.innerHTML = key + ' : ' + JSON.stringify(data2[key]);
                                body.appendChild(pre);
                                console.log('Key : ' + key + ', Value : ' + JSON.stringify(data2[key]))
                            })
                            count++;
                            throw 'Break';
                        }
                    })
                }
                catch (e) 
                {
                    if (e !== 'Break') throw e
                }
            }

            if (count == 0)
            {
                let pre = document.createElement('pre');
                    pre.innerHTML = "Il n'y a pas de pokemon avec ce nom !"
                    body.appendChild(pre);
            }
        })
    }

    function getPokemonByType(type)
    {
        let count = 0;
        fetch('pokemon.json')
        .then((response) => response.json())
        .then((response) => {
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {
                let data = (response[i].type);

                Object.keys(data).forEach(function(key) {
                    if(data[key] == type)
                    {
                        let data2 = (response[i]);
                        Object.keys(data2).forEach(function(key) {
                            let pre = document.createElement('pre');
                            pre.innerHTML = key + ' : ' + JSON.stringify(data2[key]);
                            body.appendChild(pre);
                            console.log('Key : ' + key + ', Value : ' + JSON.stringify(data2[key]))
                        })
                    }
                })
            }
        })
    }

    



    //EVENTS
    button.addEventListener('click', () => {
        let textId = id.value;
        let textNom = nom.value;
        let textSelect = select.value;
        // console.log(textId);

        if (textId.length) 
        {
            getPokemonsById(textId);
        }
        
        if (textNom.length) 
        {
            getPokemonsByName(textNom);
        }
        
        if (textSelect.length) 
        {
            getPokemonByType(textSelect);
            console.log('youpi select')
        }
        
    })

})