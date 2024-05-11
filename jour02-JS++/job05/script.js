window.addEventListener("scroll", function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

    const footer = document.getElementById("footer");
    footer.style.height = `${scrolledPercentage}%`;
    footer.style.backgroundColor = `rgb(${255 - scrolledPercentage * 2.55}, ${scrolledPercentage * 2.55}, 0)`;
});

// NOTE : 
// Dans le fichier JavaScript, nous avons ajouté un écouteur d'événements de défilement (scroll) à la fenêtre.
// À chaque fois que l'utilisateur fait défiler la page, nous calculons le pourcentage de défilement et ajustons la hauteur et la couleur du footer en conséquence.
// La couleur du footer évolue du rouge au vert en fonction du pourcentage de défilement.