const bodyColor = document.querySelector("body")
const textColor = document.querySelector("h1")
let colorSwitch = false

function changeTheme() {
    if (colorSwitch == false) {
    bodyColor.style.backgroundColor = `hsl(0, 0%, 0%)`
    textColor.style.color = `hsl(0, 0%, 100%)`
    colorSwitch = true
    } else {
    bodyColor.style.backgroundColor = `hsl(0, 0%, 100%)`
    textColor.style.color = `hsl(0, 0%, 0%)`
    colorSwitch = false
    }
}

document.getElementById("button").addEventListener("click", changeTheme)