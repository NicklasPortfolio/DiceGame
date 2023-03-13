const text = document.getElementById("text")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")

function src(rand) {
    let src = "img/DICE" + rand + ".png"
    return src
}

function doStuff() {
    let rand1 = Math.floor(Math.random() * 6) + 1
    let rand2 = Math.floor(Math.random() * 6) + 1

    let src1 = src(rand1)
    let src2 = src(rand2)

    img1.setAttribute("src", src1)
    img2.setAttribute("src", src2)

    if (rand1 > rand2) {
        text.innerHTML = "Player 1 Wins!"
    } 
    else if (rand1 < rand2) {
        text.innerHTML = "Player 2 Wins!"
    } 
    else {
        text.innerHTML = "Tie!"
    }
}