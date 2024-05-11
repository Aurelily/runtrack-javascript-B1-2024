// Fonction pour vérifier si une année est bissextile :
// Une année est considérée comme bissextile si elle est divisible par 4. Cependant, il y a quelques exceptions à cette règle :

// Si une année est divisible par 100, elle n'est considérée comme bissextile que si elle est également divisible par 400.
// Ainsi, selon cette règle, voici comment on détermine si une année est bissextile :
// Si l'année est divisible par 4 mais pas par 100, elle est bissextile.
// Si l'année est divisible à la fois par 4 et par 100, elle est bissextile uniquement si elle est également divisible par 400.

function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Appel de la fonction
const annee = 2024;
console.log("L'année", annee, "est bissextile :", bisextile(annee));