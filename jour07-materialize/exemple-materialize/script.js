document.addEventListener("DOMContentLoaded", function () {
  // BOUTONS FLOTTANT
  //------------------
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "top",
    hoverEnabled: false, // Rend le menu dépliable au clic seulement
    //toolbarEnabled: true, // On doit ajouter la class toolbar au FAB pour faire fonctionner cette option (elle doit être seule sinon ça marche mal)
  });

  //CHAMP AUTOCOMPLETE : ICI EN JQUERY
  $("input.autocomplete").autocomplete({
    data: {
      Aurelie: "https://avatars.githubusercontent.com/u/79448947?v=4",
      Céline: null,
      William:
        "https://avatars.githubusercontent.com/u/112714817?v=4",
    },
  });

  //BLOCS ACCORDEONS : JAVASCRIPT
  var blocs = document.querySelectorAll(".collapsible");
  var instancesBloc = M.Collapsible.init(blocs, { accordion: true });

  //IMAGE EN PARALLAX
  var imgPara = document.querySelectorAll(".parallax");
  var instancesImg = M.Parallax.init(imgPara, { responsiveThreshold: 0 });

  //MODAL
  var elemModal = document.querySelectorAll(".modal");
  var instancesModal = M.Modal.init(elemModal, { opacity: 0.8 });
});
