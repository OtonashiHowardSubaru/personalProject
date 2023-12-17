function showLarge(e) {
    let smallObj = e.target;
    document.getElementById("largeImg").src = smallObj.src;
}

function init() {
    let smalls = document.querySelectorAll(".small-imgs")

    for(let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
        console.log("被點了")
    }
}

window.addEventListener("load", init, false);