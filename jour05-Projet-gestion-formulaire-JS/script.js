// NOTE : pour ma validation de formulaire j'ai choisi d'utiliser la librarie DOMPurify pour palier aux failles XSS (injection de JS dans les formualires)
// Lien vers la library https://github.com/cure53/DOMPurify


//Elements du formulaire
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const adresse = document.querySelector("#adresse");
const codePostal = document.querySelector("#codePostal");
const motDePasse1 = document.querySelector("#motDePasse1");
const motDePasse2 = document.querySelector("#motDePasse2");

// VERIF NOM : Si le nom est < 4 caractère je le considère comme trop petit
// --------------------------------------------------------------------------
nom.addEventListener('keyup', () => {

    let tempNom = nom.value;
    const cleanNom = DOMPurify.sanitize(tempNom);
    console.log(cleanNom);
    let erreurNom = document.createElement('p');
    erreurNom.id = "erreurNom"
    let pNom = document.querySelector('#erreurNom');
     
    if(cleanNom.length != 0 && cleanNom.length < 4)
    {
        if (pNom != null){
            pNom.remove();
        }

        erreurNom.textContent = "La taille de votre nom est trop petite";
        erreurNom.style.color = "red";
        erreurNom.style.marginBottom = "20px";
        nom.after(erreurNom);            
    }
    else
    {            
        pNom.remove(); 
    }

})

// VERIF PRENOM : Si le nom est < 4 caractère je le considère comme trop petit
// --------------------------------------------------------------------------
prenom.addEventListener('keyup', () => {

    let tempPrenom = prenom.value;
    let erreurPrenom = document.createElement('p');
    erreurPrenom.id = "erreurPrenom"
    let pPrenom = document.querySelector('#erreurPrenom');
     
    if(tempPrenom.length != 0 && tempPrenom.length < 4)
    {
        if (pPrenom != null){
            pPrenom.remove();
        }

        erreurPrenom.innerHTML = "La taille de votre prénom est trop petite";
        erreurPrenom.style.color = "red";
        erreurPrenom.style.marginBottom = "20px";
        prenom.after(erreurPrenom);            
    }
    else
    {            
        pPrenom.remove(); 
    }

})

// VERIF EMAIL : Si le mail n'est pas au format xxxx@xxx.xxx défini par la regex 
// --------------------------------------------------------------------------
email.addEventListener('keyup', () => {

    let tempEmail= email.value;
    let erreurEmail= document.createElement('p');
    let pEmail = document.querySelector('#erreurEmail');
    erreurEmail.id = "erreurEmail"
     
    if(!tempEmail.match(/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/))
    {
        if (pEmail != null){
            pEmail.remove();
        }

        erreurEmail.innerHTML = "Le format de mail n'est pas le bon.";
        erreurEmail.style.color = "red";
        erreurEmail.style.marginBottom = "20px";
        erreurEmail.id = "erreurEmail"
        email.after(erreurEmail);            
    }
    else
    {            
        pEmail.remove(); 
    }

})
