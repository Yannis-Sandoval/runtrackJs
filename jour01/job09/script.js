function trie(numbers, order) {
    // const numberslength = numbers.length
    // let listeTriee = []
    function compareNumbers(a, b){return b - a}
    console.log(numbers)
    if (order == "asc") {
        return numbers.sort(compareNumbers)
        // let lowest = 0
        // for (let i = 0; i < numberslength; i++) {
        //     console.log(numbers)
        //     console.log(listeTriee)
        //     for (let e = 0; e < numbers.length; e++) {
        //         console.log(numbers[lowest] + " " + numbers[e])
        //         if (numbers[lowest] > numbers[e])
        //             lowest = e

        //     }
        //     listeTriee.splice(listeTriee.length, 0, numbers[lowest])
        //     numbers.splice(lowest, 1)
        // }
        // console.log(listeTriee)
    } else if (order == "desc") {
        numbers.sort(compareNumbers)
        return numbers.reverse()
        // let lowest
        // for (let i = 0; i < numberslength; i++) {
        //     lowest = numbers[0]
        //     console.log(numbers)
        //     console.log(listeTriee)
        //     for (let e = 0; e < numbers.length; e++) {
        //         console.log(numbers[lowest] + " " + numbers[e])
        //         if (numbers[lowest] < numbers[e])
        //             lowest = e
        //     }
        //     listeTriee.splice(listeTriee.length, 0, numbers[lowest])
        //     numbers.splice(lowest, 1)
        // }
        // console.log(listeTriee)
    }
    
}

function choixOrdre() {
    let choix = window.prompt("Veuillez choisir entre ascendant ou descendant (asc/desc)")
    while (! choix == "asc" && ! choix == "desc") {
        choix = window.prompt("Veuillez choisir entre ascendant ou descendant (asc/desc)")
    }
    return choix
}

let numbers = [2,32,3472,13,-128,0,4]
window.alert("Liste : " + numbers)
let order = choixOrdre()

console.log(trie(numbers, order))