function jourTravaille(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1; // Les mois vont de 0 à 11, donc on ajoute 1
    const jour = date.getDate();
    
    const joursFeries = [
        "2024-01-01", // Jour de l'An
        "2024-04-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-30", // Ascension
        "2024-06-10", // Pentecôte
        "2024-07-14", // Fête nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice 1918
        "2024-12-25"  // Noël
    ];
    
    const estFerie = joursFeries.includes(`${annee}-${mois < 10 ? '0' : ''}${mois}-${jour < 10 ? '0' : ''}${jour}`);
    
    const jourSemaine = date.getDay(); // 0 pour dimanche, 1 pour lundi, ..., 6 pour samedi
    
    if (estFerie) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation de la fonction jourTravaille
const dateTest1 = new Date("2024-05-01"); // Jour férié
jourTravaille(dateTest1);

const dateTest2 = new Date("2024-03-16"); // Jour travaillé (jeudi)
jourTravaille(dateTest2);

const dateTest3 = new Date("2024-03-17"); // Week-end (vendredi)
jourTravaille(dateTest3);
