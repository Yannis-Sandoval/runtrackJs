function keylog() {
    const keyLogger = document.getElementById("keylogger")
    if (/^[a-z]$/i.test(event.key)) {
        keyLogger.value += event.key
    }
}

document.addEventListener("keydown", keylog)

// document.addEventListener('keydown', function(event) {
//     if (alphabet.includes(event.key)) {
//         key = document.createTextNode(event.key)
//         document.getElementById("keylogger").appendChild(key)
//     }
// })