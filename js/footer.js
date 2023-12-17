document.addEventListener('DOMContentLoaded', function() {
    //設定通用變數
var acc = document.querySelectorAll(".accordion");
var arrow = document.querySelectorAll(".arrow-ttd");
// 設定伸展容器的函式
function toggleAccordion(e) {  
    // 如果畫面寬度>=1024，則停用函式
    if (window.innerWidth >= 1024) {
        return; 
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
    // 旋轉
    //暫時把arrow定義到只有被點擊到的那個
    let arrow = e.currentTarget.querySelector(".arrow-ttd"); 
    arrow.classList.toggle("arrow-ttd-rotated");
}

function autoAccordion() {
    if (window.innerWidth < 1024) {
        // 當畫面寬度低於1024，自動摺疊
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", toggleAccordion);
            acc[i].classList.remove("active")
            acc[i].nextElementSibling.style.maxHeight = "0";
            acc[i].nextElementSibling.style.paddingTop = "0";
            acc[i].nextElementSibling.style.paddingBottom = "0";
            arrow[i].classList.remove("arrow-ttd-rotated")
        }
    } else {
        // 當畫面寬度高於1024，自動展開
        for (let i = 0; i < acc.length; i++) {
            acc[i].removeEventListener("click", toggleAccordion);
            acc[i].classList.add("active")
            acc[i].nextElementSibling.style.maxHeight = "fit-content";
            acc[i].nextElementSibling.style.paddingTop = "10px";
            acc[i].nextElementSibling.style.paddingBottom = "10px";
            arrow[i].classList.add("arrow-ttd-rotated")
        }
    }
}

function footerInit(){
    //設定事件監聽-點擊並伸縮
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", toggleAccordion);
    }

    // 設定事件監聽-寬度變化
    window.addEventListener('resize', autoAccordion);
}

//設定事件監聽-點擊並伸縮
for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", toggleAccordion);
}

// 設定事件監聽-寬度變化
window.addEventListener('resize', autoAccordion);

// window.addEventListener('load', footerInit);
    footerInit();
});
