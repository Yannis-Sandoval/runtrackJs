function affichage() {
    const citation = document.getElementById("citation")
    const text = citation.textContent
    console.log(citation)
}

document.getElementById("button").addEventListener("click", affichage)

