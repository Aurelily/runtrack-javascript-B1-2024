function showhide() {
    const container = document.getElementById("container");
    const article = document.getElementById("article");

    if (!article) {
        // Si l'article n'existe pas, le créer et l'ajouter au conteneur
        const newArticle = document.createElement("article");
        newArticle.id = "article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        container.appendChild(newArticle);
    } else {
        // Si l'article existe, le supprimer du conteneur
        container.removeChild(article);
    }
}

const button = document.getElementById("button");
if (button) {
    button.addEventListener("click", showhide);
} else {
    console.log("Le bouton avec l'id 'button' n'a pas été trouvé.");
}
