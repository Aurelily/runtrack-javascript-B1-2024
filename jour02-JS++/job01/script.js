function citation() {
    const citationElement = document.getElementById("citation");
    if (citationElement) {
        const citationText = citationElement.textContent.trim();
        console.log("La citation est :", citationText);
    } else {
        console.log("L'élément avec l'id 'citation' n'a pas été trouvé.");
    }
}

const button = document.getElementById("button");
if (button) {
    button.addEventListener("click", citation);
} else {
    console.log("Le bouton avec l'id 'button' n'a pas été trouvé.");
}
