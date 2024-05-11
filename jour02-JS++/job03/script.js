// Fonction pour ajouter 1 au compteur
function addOne() {
    // Récupérer l'élément avec l'id "compteur"
    const compteurElement = document.getElementById("compteur");
    
    // Vérifier si l'élément a été trouvé
    if (compteurElement) {
        // Récupérer la valeur actuelle du compteur
        let compteur = parseInt(compteurElement.textContent);
        
        // Incrémenter le compteur de 1
        compteur++;
        
        // Mettre à jour le contenu de l'élément avec le nouveau compteur
        compteurElement.textContent = compteur;
    } else {
        console.log("L'élément avec l'id 'compteur' n'a pas été trouvé.");
    }
}

// Récupérer le bouton
const button = document.getElementById("button");

// Vérifier si le bouton a été trouvé
if (button) {
    // Ajouter un écouteur d'événements pour le clic sur le bouton
    button.addEventListener("click", addOne);
} else {
    console.log("Le bouton avec l'id 'button' n'a pas été trouvé.");
}
