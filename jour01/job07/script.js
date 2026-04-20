let jour = window.prompt("Choisie un jour")
let mois = window.prompt("Choisie un mois")
let date = new Date("2026-" + mois + "-" + jour)
const joursFeries = ["0,1", "3,15", "3,17", "3,18", "6,13", "6,14", "6,15"]


function jourTravaille(date) {
    if (joursFeries.includes(date.getMonth() + "," + date.getDate())) {
        console.log("Le " + afficherDate(date) + " est un jour férié")
    } else if (date.getDay() == 6 || date.getDay() == 0) {
        console.log("Le " + afficherDate(date) + " est un week-end")
    } else {
        console.log("Le " + afficherDate(date) + " est un jour travaillé")
    }
}

function afficherDate(date) {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    return joursSemaine[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear()
}


jourTravaille(date)