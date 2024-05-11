document.addEventListener("DOMContentLoaded", (event) => {
    

    function jsonValueKey(json, key)
    {
        
        fetch(json +'.json')
        .then((response) => response.json())
        .then( (response) => {
            console.log(response[key]);
        })
    };

    jsonValueKey('school', 'city');
    
})