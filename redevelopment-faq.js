const question = document.querySelectorAll(".question");
question.forEach((header, a) => {
    header.addEventListener("click", () => {
      
        header.nextElementSibling.classList.toggle("active");
        const open = header.querySelector(".open");
        const close = header.querySelector(".close");

        if (header.nextElementSibling.classList.contains("active")) {
            open.classList.remove("active");
            close.classList.add("active");
        } else {
             open.classList.add("active");
            close.classList.remove("active");
        }
    });
});