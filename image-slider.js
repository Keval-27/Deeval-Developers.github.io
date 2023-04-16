
// var indexvalue = 0;
// function slideshow() {
//     setTimeout(slideshow, 7000);
//     var x;
//     const img = document.querySelectorAll(".image-container")
//     for (x = 0; x < img.length; x++){
//         img[x].style.display = "none";
//     }
//     indexvalue++;
//     if (indexvalue > img.length) { indexvalue = 1 }
//     img[indexvalue - 1].style.display = "block";
// }
// slideshow();
var indexValue = 1;
showImg(indexValue);

function btn_slider(a) { showImg(indexValue = a); }
function slide_slider(a) { showImg(indexValue += a); }
function showImg(a) {
    var j;
    const slide_img = document.querySelectorAll(".image-container");
    const slide_nav = document.querySelectorAll(".slider-nav span");
    if (a > slide_img.length) {
        indexValue = 1
    }
    if (a < 1) {
        indexValue=slide_img.length
    }
    for (j = 0; j < slide_img.length; j++){
        slide_img[j].style.display = "none";
    }
    for (j = 0; j < slide_nav.length; j++){
        slide_nav[j].style.background = "#c5c6c7";
    }
    slide_img[indexValue - 1].style.display = "block";
    slide_nav[indexValue - 1].style.background = "#05386b";
}

// let slides = document.querySelectorAll(".image-container");
// let index = 0;

// function next() {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
// }

// function prev() {
//     slides[index].classList.remove("active");
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add("active");
// }


