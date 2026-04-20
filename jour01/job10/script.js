function compterVoyelle (phrase) {
    const voyelles = ["a", "e", "i", "o", "u", "y"]
    let nbvoyelles = 0
    for (i of phrase) {
        if (voyelles.includes(i))
        nbvoyelles++
    }
    window.alert("La phrase contient " + nbvoyelles + " voyelles")
}

compterVoyelle(window.prompt("Ecrivez un phrase"))