let nb1 = window.prompt("Choisie un nombre")
let nb2 = window.prompt("Choisie un autre nombre")

function sommeNombresPremiers(nb1, nb2) {
    function isNombrePremier(nb) {
        if (nb <= 1) {
            window.alert(nb + " n'est pas une nombre premier")
            return false
        }
        for (let i = 2; i <= nb/2; i++) {
            if (nb % i == 0) {
                window.alert(nb + " n'est pas une nombre premier")
                return false
            }
        }
        return true
    }
    if (isNombrePremier(nb1) && isNombrePremier(nb2)) {
        somme = Number(nb1) + Number(nb2)
        window.alert (nb1 + " et " + nb2 + " sont tous les deux des nombre premiers et leur somme est égale à " + somme)
    } else {
        window.alert("erreur")
    }
}

sommeNombresPremiers(nb1, nb2)