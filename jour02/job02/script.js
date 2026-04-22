function showhide() {
    if (newArticle.style.display === "none") {
    newArticle.style.display = "block"
    } else {
    newArticle.style.display = "none"
    }
}

const newArticle = document.createElement("article");
const newContent = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.")
newArticle.appendChild(newContent)
const currentArticle = document.getElementById("div1")
document.body.insertBefore(newArticle, currentArticle)
newArticle.style.display = "none"

document.getElementById("button").addEventListener("click", showhide)
