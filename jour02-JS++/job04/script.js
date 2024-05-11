const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    
    const keyPressed = event.key.toLowerCase();

    // NOTE : expression régulière pour vérifier si la touche pressée est une lettre minuscule de l'alphabet (de "a" à "z").
    // La condition /^[a-z]$/ teste si la touche correspond exactement à une seule lettre de l'alphabet.
    if (/^[a-z]$/.test(keyPressed)) {
        if (document.activeElement === textarea) {
            textarea.value += keyPressed.repeat(1);
        } else {
            textarea.value += keyPressed;
        }
    }
});
