// Fonction pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction pour vérifier si deux nombres sont premiers et retourner leur somme
function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction sommeNombresPremiers
const nombre1 = 17;
const nombre2 = 13;
const resultat = sommeNombresPremiers(nombre1, nombre2);
if (resultat !== false) {
    console.log(`La somme des nombres premiers ${nombre1} et ${nombre2} est : ${resultat}`);
} else {
    console.log(`Au moins un des nombres n'est pas premier.`);
}
