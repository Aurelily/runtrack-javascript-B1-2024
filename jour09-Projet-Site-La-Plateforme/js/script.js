// NOTE : pour ma validation de formulaire j'ai choisi d'utiliser la librarie DOMPurify pour palier aux failles XSS (injection de JS dans les formualires)
// Lien vers la library https://github.com/cure53/DOMPurify
/* localStorage.clear()  */

console.log(localStorage.getItem('utilisateurs'));

//Elements du formulaire
const formRegister = document.querySelector('#formRegister');
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const motDePasse1 = document.querySelector("#motDePasse1");
const motDePasse2 = document.querySelector("#motDePasse2");
const connectBtn = document.querySelector("#connectBtn");

// Variable qui change de true à false en fonction des différentes verifications de champs
let verifForm = false;

// VERIF NOM : Si le nom est < 4 caractère je le considère comme trop petit
// --------------------------------------------------------------------------
nom.addEventListener('keyup', () => {

    let tempNom = nom.value;
    const cleanNom = DOMPurify.sanitize(tempNom);
    let erreurNom = document.createElement('p');
    erreurNom.id = "erreurNom"
    let pNom = document.querySelector('#erreurNom');
     
    if(cleanNom.length != 0 && cleanNom.length < 4)
    {
        if (pNom != null){
            pNom.remove();
        }

        erreurNom.textContent = "La taille de votre nom est trop petite";
        erreurNom.style.color = "#ff008e";
        erreurNom.style.marginBottom = "20px";
        nom.after(erreurNom);
        
        verifForm = false;
    }
    else
    {            
        if (pNom != null){
            pNom.remove();
            verifForm = true;
        }

    }

})

// VERIF PRENOM : Si le nom est < 4 caractère je le considère comme trop petit
// --------------------------------------------------------------------------
prenom.addEventListener('keyup', () => {

    let tempPrenom = prenom.value;
    const cleanPrenom = DOMPurify.sanitize(tempPrenom);
    let erreurPrenom = document.createElement('p');
    erreurPrenom.id = "erreurPrenom"
    let pPrenom = document.querySelector('#erreurPrenom');
     
    if(cleanPrenom.length != 0 && cleanPrenom.length < 4)
    {
        if (pPrenom != null){
            pPrenom.remove();
        }

        erreurPrenom.innerHTML = "La taille de votre prénom est trop petite";
        erreurPrenom.style.color = "#ff008e";
        erreurPrenom.style.marginBottom = "20px";
        prenom.after(erreurPrenom);
        
        verifForm = false;
    }
    else
    {            
        if (pPrenom != null){
            pPrenom.remove();
            verifForm = true;
        } 
    }

})

// VERIF EMAIL : Si le mail n'est pas au format xxxx@xxx.xxx défini par la regex 
// --------------------------------------------------------------------------
email.addEventListener('keyup', () => {

    let tempEmail= email.value;
    const cleanEmail = DOMPurify.sanitize(tempEmail);
    let erreurEmail= document.createElement('p');
    let pEmail = document.querySelector('#erreurEmail');
    erreurEmail.id = "erreurEmail"
     
    if(!cleanEmail.match(/^[a-z0-9._-]+@laplateforme\.io$/i))
    {
        if (pEmail != null){
            pEmail.remove();
        }

        erreurEmail.innerHTML = "Le format de mail n'est pas le bon.";
        erreurEmail.style.color = "#ff008e";
        erreurEmail.style.marginBottom = "20px";
        erreurEmail.id = "erreurEmail"
        email.after(erreurEmail);
        
        verifForm = false;
    }
    else
    {            
        if (pEmail != null){
            pEmail.remove();
            verifForm = true;
        }
    }

})

// VERIF MOT DE PASSE : (min.: 8 caractères, 1 majuscule, 1 minuscule, 1 caractère spécial, 1 nombre)
// --------------------------------------------------------------------------
motDePasse1.addEventListener('keyup', () => {

    let tempMotDePasse= motDePasse1.value;
    const cleanMotDePasse1 = DOMPurify.sanitize(tempMotDePasse);
    let erreurMotDePasse= document.createElement('p');
    let pMotDePasse = document.querySelector('#erreurMotDePasse');
    erreurMotDePasse.id = "erreurMotDePasse"
     
    if(!cleanMotDePasse1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    )
    {
        if (pMotDePasse != null){
            pMotDePasse.remove();
        }

        erreurMotDePasse.innerHTML = "Le format du mot de passe n'est pas correct.";
        erreurMotDePasse.style.color = "#ff008e";
        erreurMotDePasse.style.marginBottom = "20px";
        erreurMotDePasse.id = "erreurMotDePasse"
        motDePasse1.after(erreurMotDePasse);
        
        verifForm = false;
    }
    else
    {            
        if (pMotDePasse != null){
            pMotDePasse.remove();
            verifForm = true;
        }
    }

})


// VERIF MOT DE PASSE CONFIRMATION : les 2 mots de passe doivent correspondre
// --------------------------------------------------------------------------
motDePasse2.addEventListener('keyup', () => {

    let tempMotDePasse1= motDePasse1.value;
    let tempMotDePasse2= motDePasse2.value;
    const cleanMotDePasse1 = DOMPurify.sanitize(tempMotDePasse1);
    const cleanMotDePasse2 = DOMPurify.sanitize(tempMotDePasse2);
    let erreurMotDePasse2= document.createElement('p');
    let pMotDePasse2 = document.querySelector('#erreurMotDePasse2');
    erreurMotDePasse2.id = "erreurMotDePasse2"
     
    if(cleanMotDePasse1 != cleanMotDePasse2)
    {
        if (pMotDePasse2 != null){
            pMotDePasse2.remove();
        }

        erreurMotDePasse2.innerHTML = "Les mots de passe ne correspondent pas.";
        erreurMotDePasse2.style.color = "#ff008e";
        erreurMotDePasse2.style.marginBottom = "20px";
        erreurMotDePasse2.id = "erreurMotDePasse2"
        motDePasse2.after(erreurMotDePasse2);
        
        verifForm = false;
    }
    else
    {            
        if (pMotDePasse2 != null){
            pMotDePasse2.remove();
            verifForm = true;
        }
    }

})

// ENVOI DU FORMULAIRE
// --------------------------------------------------------------------------

formRegister.addEventListener('submit', function(event) {
    event.preventDefault();

    // Vérifier s'il y a déjà des utilisateurs enregistrés dans le localStorage
    let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

    // Créer un nouvel utilisateur avec les données du formulaire
    const nouvelUtilisateur = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        motDePasse: motDePasse1.value
    };

    if(verifForm === true){
        // Ajouter le nouvel utilisateur au tableau
        utilisateurs.push(nouvelUtilisateur);

        // Enregistrer le tableau mis à jour dans le localStorage
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

        alert('Utilisateur enregistré avec succès');
        console.log(localStorage.getItem('utilisateurs'));
    }else{
        let erreurForm= document.createElement('p');
        let pErrorForm = document.querySelector('#erreurForm');
        erreurForm.id = "erreurForm"
        erreurForm.innerHTML = "Il y a des erreurs dans votre formulaire !";
        erreurForm.style.color = "#ff008e";
        erreurForm.style.marginBottom = "20px";
        erreurForm.id = "erreurForm"
        formRegister.after(erreurForm);  

        if (pErrorForm != null){
            pErrorForm.remove();
        }
    }


});



