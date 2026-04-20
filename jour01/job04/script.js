let annee
let answer

function estAnneeBissextile(annee) {
    if (annee%4 == 0){
        if (annee%100 == 0) {
            if (annee%400 == 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

while (true) {
    annee = window.prompt("Choisie une année")
    annee = Number(annee)
    if (annee == null || annee == "") {
        window.alert("Veuillez entrer une valeur")
    } else if (! Number.isInteger(annee)) {
        window.alert("La donnée entrée n'est pas un nombre")
    } else {
        if (estAnneeBissextile(annee)) {
            window.alert(annee + " est une année bissextile")
        } else {
            window.alert(annee + " n'est pas une année bissextile")
        }
        break
    }
}

