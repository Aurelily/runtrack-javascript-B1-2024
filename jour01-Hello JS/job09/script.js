function tri(numbers, order) {
    if (order === "asc") {
        // Tri dans l'ordre ascendant
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        // Tri dans l'ordre descendant
        numbers.sort((a, b) => b - a);
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", retourner une erreur
        throw new Error("L'ordre de tri doit être 'asc' ou 'desc'.");
    }
    return numbers;
}

// Exemples d'utilisation de la fonction tri
// NOTE : Nous utilisons .slice() pour créer une copie du tableau d'origine avant de le trier, afin de ne pas modifier le tableau d'origine.

const tableauAscendant = [5, 2, 8, 1, 9];
console.log("Tri ascendant:", tri(tableauAscendant.slice(), "asc")); // Copie du tableau pour éviter de modifier l'original
// Résultat attendu: [1, 2, 5, 8, 9]

const tableauDescendant = [5, 2, 8, 1, 9];
console.log("Tri descendant:", tri(tableauDescendant.slice(), "desc")); // Copie du tableau pour éviter de modifier l'original
// Résultat attendu: [9, 8, 5, 2, 1]
