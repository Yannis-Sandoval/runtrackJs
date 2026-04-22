const footer = document.querySelector("footer")
const maxScroll = document.body.scrollHeight

function updateColor() {
    const scrollY = window.scrollY
    const hue = (scrollY / maxScroll) * 360
    footer.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
}

window.addEventListener("scroll", updateColor)