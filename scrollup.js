const totop = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        totop.classList.add("active")
    }
    else {
        totop.classList.remove("active")
    }
})

totop.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top : 0
    })
})


