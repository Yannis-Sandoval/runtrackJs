function addOne() {
    compteur++
    document.getElementById("compteur").innerText = compteur
}

let compteur = 0
const newP = document.getElementById("compteur");
const newContent = document.createTextNode(compteur)
newP.appendChild(newContent)
const currentP = document.getElementById("div1")
document.body.insertBefore(newP, currentP)


document.getElementById("button").addEventListener("click", addOne)
