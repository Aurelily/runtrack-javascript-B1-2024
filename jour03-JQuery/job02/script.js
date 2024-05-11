$(document).ready(function () {
  // Les deux messages sont masqués à l'arrivée sur la page
  $(".win").hide();
  $(".loose").hide();
  
  // Au clic sur le bouton, je mélange les images
  $("#btShuffle").on("click", function () {
    let imgArray = $("#rangees > div > img").remove().toArray();
    shuffleArray(imgArray);
    $("#melangees").append(imgArray);
  });

  // Fonction pour mélanger un tableau
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Je stocke les informations sur l'image en cours de déplacement
  let draggingImage = null;

  // Gestion du clic sur une image
  $("#melangees").on("click", "img", function () {
    draggingImage = $(this); // Stocke l'image cliquée
  });

  // Gestion du clic sur un div de destination
  $("#rangees > div").on("click", function () {
    if (draggingImage) {
      $(this).append(draggingImage); // Place l'image dans le div de destination
      draggingImage = null; // Réinitialise l'image en cours de déplacement
      checkVictory(); // Vérifie si le jeu est gagné après le déplacement
    }
  });

  // Fonction pour vérifier la victoire
  function checkVictory() {
    // Si toutes les images sont placées correctement
    if ($("#rangees > div > img").length === 6) {
      let win = true;
      $("#rangees > div > img").each(function (index) {
        if ($(this).attr("alt") !== (index + 1).toString()) {
          win = false;
          return false; // Sort de la boucle each si une image est mal placée
        }
      });
      if (win) {
        $(".win").show("fast");
        $("#btShuffle").hide();
        console.log("GAGNE !!!");
      } else {
        $(".loose").show("fast");
        $("#btShuffle").hide();
        console.log("PERDU");
      }
    }
  }

  // Bouton recommencer
  $("#btReload").on("click", function () {
    location.reload();
  });

  // Surveillance des mutations pour détecter les changements dans les divs de destination
  const observer = new MutationObserver(checkVictory);
  observer.observe(document.getElementById('rangees'), { childList: true, subtree: true });
});
