var acc = document.querySelectorAll(".accordion");
var arrow = document.querySelectorAll(".arrow-ttd");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", toggleAccordion);
}

// Function to toggle accordion
function toggleAccordion(e) {
    // Check if screen width is less than or equal to 1024
    if (window.innerWidth >= 1024) {
        return; // Disable function
    }

    let panel = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.paddingTop = "10px";
        panel.style.paddingBottom = "10px";
    } else {
        panel.style.maxHeight = "0";
        panel.style.paddingTop = "0";
        panel.style.paddingBottom = "0";
    }
    // Rotate arrow
    let arrow = e.currentTarget.querySelector(".arrow-ttd");
    arrow.classList.toggle("arrow-ttd-rotated");
}

// Additional check on window resize
window.addEventListener('resize', function () {
    if (window.innerWidth <= 1024) {
        // If window is resized to a width less than or equal to 1024, disable the function
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", toggleAccordion);
            acc[i].classList.remove("active")
            acc[i].nextElementSibling.style.maxHeight = "0";
            acc[i].nextElementSibling.style.paddingTop = "0";
            acc[i].nextElementSibling.style.paddingBottom = "0";
            arrow[i].classList.remove("arrow-ttd-rotated")
        }
    } else {
        // If window is resized to a width greater than 1024, enable the function
        for (var i = 0; i < acc.length; i++) {
            acc[i].removeEventListener("click", toggleAccordion);
            acc[i].classList.add("active")
            acc[i].nextElementSibling.style.maxHeight = "fit-content";
            acc[i].nextElementSibling.style.paddingTop = "10px";
            acc[i].nextElementSibling.style.paddingBottom = "10px";
            arrow[i].classList.add("arrow-ttd-rotated")
        }
    }
});