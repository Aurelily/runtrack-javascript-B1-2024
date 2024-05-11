// NOTE : Code Konami : "↑ ↑ ↓ ↓ ← → ← → B A". 

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let konamiCodePosition = 0;

function checkKonamiCode(event) {
    if (event.key === konamiCode[konamiCodePosition]) {
        // Vérifie si la touche pressée correspond à la prochaine touche du code Konami
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            // Si toutes les touches du code Konami ont été entrées dans l'ordre
            document.body.classList.add("konami");
            konamiCodePosition = 0; // Réinitialise la position du code Konami pour la prochaine utilisation
        }
    } else {
        // Si la touche pressée ne correspond pas à la prochaine touche du code Konami
        konamiCodePosition = 0; // Réinitialise la position du code Konami
    }
}


document.addEventListener("keydown", checkKonamiCode);
